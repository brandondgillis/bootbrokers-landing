import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import styles from '../../styles/BlogPost.module.css';

export default function BlogPost({ post }) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / documentHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      if (paragraph.startsWith('- ') || paragraph.includes('\n- ')) {
        const allLines = paragraph.split('\n');
        const introText = [];
        const bulletItems = [];
        
        allLines.forEach(line => {
          if (line.trim().startsWith('- ')) {
            bulletItems.push(line.replace(/^- /, '').trim());
          } else if (line.trim() && bulletItems.length === 0) {
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

  const formattedDate = new Date(post.publish_date || post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Head>
        <title>{post.title} - Boot Brokers Blog</title>
        <meta name="description" content={post.excerpt} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <div 
        className={styles.progressBar}
        style={{ width: `${readingProgress}%` }}
      />

      <div className={styles.postContainer}>
        {post.featured_image && (
          <img 
            src={post.featured_image} 
            alt={post.title}
            className={styles.featuredImage}
          />
        )}

        <Link href="/blog" className={styles.backLink}>
          &larr; Back to Blog
        </Link>

        <article className={styles.post}>
          <header>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              {post.author_name && (
                <span className={styles.author}>By {post.author_name}</span>
              )}
              <span className={styles.date}>{formattedDate}</span>
              {post.read_time && (
                <span className={styles.readTime}>
                  {post.read_time} min read
                </span>
              )}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className={styles.tags}>
                {post.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </header>

          <div className={styles.content}>
            {renderContent(post.content)}
          </div>
        </article>

        <footer className={styles.footer}>
          <Link href="/" className={styles.cta}>
            Explore Boot Brokers
          </Link>
          <p>&copy; {new Date().getFullYear()} Boot Brokers &middot; Built for craftsmanship</p>
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
    fallback: 'blocking',
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
    revalidate: 60,
  };
}
