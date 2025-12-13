import { useState, useRef } from 'react';
import styles from '../styles/RichTextEditor.module.css';

export default function RichTextEditor({ value, onChange, placeholder = "Write your content..." }) {
  const [showPreview, setShowPreview] = useState(false);
  const textareaRef = useRef(null);

  function insertFormatting(before, after = '') {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const beforeText = value.substring(0, start);
    const afterText = value.substring(end);

    const newText = beforeText + before + selectedText + after + afterText;
    onChange(newText);

    setTimeout(() => {
      const newPosition = start + before.length + selectedText.length + after.length;
      textarea.focus();
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  }

  function handleBold() {
    insertFormatting('**', '**');
  }

  function handleItalic() {
    insertFormatting('*', '*');
  }

  function handleHeading(level) {
    const prefix = '#'.repeat(level) + ' ';
    insertFormatting(prefix);
  }

  function handleList(ordered = false) {
    const prefix = ordered ? '1. ' : '- ';
    insertFormatting('\n' + prefix);
  }

  function handleLink() {
    insertFormatting('[', '](url)');
  }

  function renderPreview(content) {
    return content.split('\n\n').map((paragraph, idx) => {
      paragraph = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      paragraph = paragraph.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace('### ', '') }} />;
      }
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace('## ', '') }} />;
      }
      if (paragraph.startsWith('# ')) {
        return <h1 key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace('# ', '') }} />;
      }
      if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('- '));
        return (
          <ul key={idx}>
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace('- ', '') }} />
            ))}
          </ul>
        );
      }
      if (paragraph.includes('\n1. ') || paragraph.startsWith('1. ')) {
        const items = paragraph.split('\n').filter(line => /^\d+\. /.test(line));
        return (
          <ol key={idx}>
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\. /, '') }} />
            ))}
          </ol>
        );
      }
      return <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />;
    });
  }

  return (
    <div className={styles.editor}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarGroup}>
          <button type="button" onClick={() => handleHeading(1)} title="Heading 1" className={styles.toolBtn}>
            H1
          </button>
          <button type="button" onClick={() => handleHeading(2)} title="Heading 2" className={styles.toolBtn}>
            H2
          </button>
          <button type="button" onClick={() => handleHeading(3)} title="Heading 3" className={styles.toolBtn}>
            H3
          </button>
        </div>

        <div className={styles.toolbarDivider} />

        <div className={styles.toolbarGroup}>
          <button type="button" onClick={handleBold} title="Bold" className={styles.toolBtn}>
            <strong>B</strong>
          </button>
          <button type="button" onClick={handleItalic} title="Italic" className={styles.toolBtn}>
            <em>I</em>
          </button>
        </div>

        <div className={styles.toolbarDivider} />

        <div className={styles.toolbarGroup}>
          <button type="button" onClick={() => handleList(false)} title="Bullet List" className={styles.toolBtn}>
            List
          </button>
          <button type="button" onClick={() => handleList(true)} title="Numbered List" className={styles.toolBtn}>
            1-2-3
          </button>
        </div>

        <div className={styles.toolbarDivider} />

        <div className={styles.toolbarGroup}>
          <button type="button" onClick={handleLink} title="Insert Link" className={styles.toolBtn}>
            Link
          </button>
        </div>

        <div className={styles.toolbarGroup} style={{ marginLeft: 'auto' }}>
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className={styles.previewBtn}
          >
            {showPreview ? 'Edit' : 'Preview'}
          </button>
        </div>
      </div>

      {!showPreview ? (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={styles.textarea}
          rows="20"
        />
      ) : (
        <div className={styles.preview}>
          {renderPreview(value)}
        </div>
      )}

      <div className={styles.help}>
        <small>
          Select text and click toolbar buttons or use markdown: **bold** *italic* ## heading - list
        </small>
      </div>
    </div>
  );
}