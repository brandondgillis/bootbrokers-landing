import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import AdminAuth from '../../../components/AdminAuth';
import { supabase } from '../../../lib/supabase';
import styles from '../../../styles/BlogEditor.module.css';

export default function NewPost() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    status: 'draft',
    publish_date: '',
  });
  const [preview, setPreview] = useState(false);

  function handleChange(field, value) {
    setForm({ ...form, [field]: value });
    
    // Auto-generate slug from title
    if (field === 'title' && !form.slug) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setForm({ ...form, title: value, slug });
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
        .insert([postData]);

      if (error) throw error;

      alert('Post saved successfully!');
      router.push('/blog/admin');
    } catch (err) {
      alert('Error saving post: ' + err.message);
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

  return (
    <AdminAuth>
      <Head>
        <title>New Post - Blog Admin</title>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Create New Post</h1>
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
                onChange={(e) => handleChange('title', e.target.value)}
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
                  placeholder="Write your post content here...&#10;&#10;## Use headings&#10;&#10;Regular paragraphs work great.&#10;&#10;### Lists:&#10;- Item one&#10;- Item two"
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
