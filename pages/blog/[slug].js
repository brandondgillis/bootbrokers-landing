import Head from 'next/head';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import styles from '../../styles/BlogPost.module.css';

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Post not found</h1>
        <Link href="/blog">&larr; Back to Blog</Link>
      </div>
    );
  }

  const renderContent = (content) => {
    const lines = content.split('\n\n');
    return lines.map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
      }
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
      }
      // Check if paragraph contains bullet points
      if (paragraph.startsWith('- ') || paragraph.includes('\n- ')) {
        const allLines = paragraph.split('\n');
        const introText = [];
        const bulletItems = [];
        
        // Separate intro text from bullets
        allLines.forEach(line => {
          if (line.trim().startsWith('- ')) {
            bulletItems.push(line.replace(/^- /, '').trim());
          } else if (line.trim() && bulletItems.length === 0) {
            // Text before bullets
            introText.push(line);
          }
        });
        
        return (
          <div key={idx}>
            {introText.length > 0 && <p>{introText.join(' ')}</p>}
            <ul>
              {bulletItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );
      }
      if (paragraph.includes('*') && paragraph.match(/\*([^*]+)\*/)) {
        const parts = paragraph.split(/\*([^*]+)\*/);
        return (
          <p key={idx}>
            {parts.map((part, i) => 
              i % 2 === 1 ? <em key={i}>{part}</em> : part
            )}
          </p>
        );
      }
      return <p key={idx}>{paragraph}</p>;
    });
  };

  return (
    <>
      <Head>
        <title>{post.title} - Boot Brokers Blog</title>
        <meta name="description" content={post.excerpt} />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.postContainer}>
        <Link href="/blog" className={styles.backLink}>
          &larr; Back to Blog
        </Link>

        <article className={styles.post}>
          <header>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.date}>
              {new Date(post.publish_date || post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </header>

          <div className={styles.content}>
            {renderContent(post.content)}
          </div>
        </article>

        <footer className={styles.footer}>
          <Link href="/" className={styles.cta}>
            Visit Boot Brokers
          </Link>
          <p>Copyright {new Date().getFullYear()} Boot Brokers</p>
        </footer>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published');

  const paths = (posts || []).map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Allow new posts to be generated on-demand
  };
}

export async function getStaticProps({ params }) {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // Revalidate every minute
  };
}