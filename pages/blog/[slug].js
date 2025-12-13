import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '../../lib/posts';
import styles from '../../styles/BlogPost.module.css';

export default function BlogPost({ post }) {
  if (!post) {
    return <div>Post not found</div>;
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
      if (paragraph.includes('\n- ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('- '));
        return (
          <ul key={idx}>
            {items.map((item, i) => (
              <li key={i}>{item.replace('- ', '')}</li>
            ))}
          </ul>
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
          Back to Blog
        </Link>
        <article className={styles.post}>
          <header>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.date}>{post.date}</p>
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
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}