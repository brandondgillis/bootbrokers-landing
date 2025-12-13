import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminAuth from '../../../../components/AdminAuth';
import { supabase } from '../../../../lib/supabase';
import styles from '../../../../styles/BlogEditor.module.css';

export default function EditPost() {
  const router = useRouter();
  const { id } = router.query;
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    status: 'draft',
    publish_date: '',
  });
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (id) loadPost();
  }, [id]);

  async function loadPost() {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setForm({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        status: data.status,
        publish_date: data.publish_date ? new Date(data.publish_date).toISOString().slice(0, 16) : '',
      });
    } catch (err) {
      alert('Error loading post: ' + err.message);
      router.push('/blog/admin');
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(status = form.status) {
    setSaving(true);
    try {
      const postData = {
        ...form,
        status,
        publish_date: form.publish_date || (status === 'published' ? new Date().toISOString() : null),
      };

      const { error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', id);

      if (error) throw error;

      alert('Post updated successfully!');
      router.push('/blog/admin');
    } catch (err) {
      alert('Error updating post: ' + err.message);
    } finally {
      setSaving(false);
    }
  }

  function renderPreview(content) {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
      }
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
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
      return <p key={idx}>{paragraph}</p>;
    });
  }

  if (loading) {
    return (
      <AdminAuth>
        <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
      </AdminAuth>
    );
  }

  return (
    <AdminAuth>
      <Head>
        <title>Edit Post - Blog Admin</title>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Edit Post</h1>
          <div className={styles.actions}>
            <button onClick={() => router.back()} className={styles.btnSecondary}>
              Cancel
            </button>
            <button onClick={() => handleSave('draft')} disabled={saving} className={styles.btnSecondary}>
              Save Draft
            </button>
            <button onClick={() => handleSave('published')} disabled={saving} className={styles.btnPrimary}>
              {saving ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </div>

        <div className={styles.editor}>
          <div className={styles.form}>
            <div className={styles.field}>
              <label>Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Post title"
                required
              />
            </div>

            <div className={styles.field}>
              <label>Slug * (URL path)</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                placeholder="post-url-slug"
                required
              />
              <small>Preview: /blog/{form.slug || 'your-post-slug'}</small>
            </div>

            <div className={styles.field}>
              <label>Excerpt * (Short description)</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                placeholder="Brief description for blog home page"
                rows="2"
                required
              />
            </div>

            <div className={styles.field}>
              <label>
                Content * 
                <button
                  type="button"
                  onClick={() => setPreview(!preview)}
                  className={styles.previewToggle}
                >
                  {preview ? 'Edit' : 'Preview'}
                </button>
              </label>
              {!preview ? (
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Write your post content here..."
                  rows="20"
                  required
                />
              ) : (
                <div className={styles.preview}>
                  {renderPreview(form.content)}
                </div>
              )}
              <small>
                Formatting: ## Heading, ### Subheading, - List item
              </small>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Status</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>

              {form.status === 'scheduled' && (
                <div className={styles.field}>
                  <label>Publish Date</label>
                  <input
                    type="datetime-local"
                    value={form.publish_date}
                    onChange={(e) => setForm({ ...form, publish_date: e.target.value })}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminAuth>
  );
}
