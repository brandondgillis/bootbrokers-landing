import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminAuth from '../../../components/AdminAuth';
import { supabase } from '../../../lib/supabase';
import styles from '../../../styles/BlogAdmin.module.css';

export default function BlogAdmin() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const router = useRouter();

  useEffect(() => {
    loadPosts();
  }, [filter]);

  async function loadPosts() {
    setLoading(true);
    try {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;
      if (error) throw error;
      setPosts(data || []);
    } catch (err) {
      console.error('Error loading posts:', err);
    } finally {
      setLoading(false);
    }
  }

  async function deletePost(id) {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      loadPosts();
    } catch (err) {
      alert('Error deleting post: ' + err.message);
    }
  }

  function getStatusColor(status) {
    switch (status) {
      case 'published': return '#4caf50';
      case 'draft': return '#ff9800';
      case 'scheduled': return '#2196f3';
      default: return '#999';
    }
  }

  return (
    <AdminAuth>
      <Head>
        <title>Blog Admin - Boot Brokers</title>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Blog Posts</h1>
          <button
            onClick={() => router.push('/blog/admin/new')}
            className={styles.btnPrimary}
          >
            + New Post
          </button>
        </div>

        <div className={styles.filters}>
          {['all', 'published', 'draft', 'scheduled'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? styles.filterActive : styles.filter}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className={styles.loading}>Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className={styles.empty}>
            <p>No posts yet. Create your first post!</p>
            <button
              onClick={() => router.push('/blog/admin/new')}
              className={styles.btnPrimary}
            >
              Create Post
            </button>
          </div>
        ) : (
          <div className={styles.postsList}>
            {posts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <div className={styles.postInfo}>
                  <h2>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <span
                      className={styles.status}
                      style={{ background: getStatusColor(post.status) }}
                    >
                      {post.status}
                    </span>
                    {post.publish_date && (
                      <span className={styles.date}>
                        {post.status === 'scheduled' ? 'Scheduled for: ' : 'Published: '}
                        {new Date(post.publish_date).toLocaleDateString()}
                      </span>
                    )}
                    <span className={styles.slug}>/{post.slug}</span>
                  </div>
                </div>
                <div className={styles.actions}>
                  <Link href={`/blog/${post.slug}`} target="_blank">
                    <button className={styles.btnSecondary}>View</button>
                  </Link>
                  <button
                    onClick={() => router.push(`/blog/admin/edit/${post.id}`)}
                    className={styles.btnPrimary}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    className={styles.btnDanger}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminAuth>
  );
}
