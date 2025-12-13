import Head from 'next/head';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import styles from '../../styles/Blog.module.css';

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Boot Brokers</title>
        <meta name="description" content="Stories, tips, and insights from the boot community" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.blogContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>BOOT BROKERS BLOG</h1>
          <p className={styles.subtitle}>Stories, tips, and insights from the boot community</p>
          
          <div className={styles.backLink}>
            <Link href="/">Back to Home</Link>
          </div>
        </header>

        <main className={styles.postsGrid}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.postCard}>
              <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                <h2>{post.title}</h2>
                <p className={styles.date}>
                  {new Date(post.publish_date || post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read more</span>
              </Link>
            </article>
          ))}
        </main>

        <footer className={styles.footer}>
          <p>Copyright {new Date().getFullYear()} Boot Brokers</p>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .lte('publish_date', new Date().toISOString())
    .order('publish_date', { ascending: false });

  return {
    props: {
      posts: posts || [],
    },
    revalidate: 60, // Revalidate every minute
  };
}