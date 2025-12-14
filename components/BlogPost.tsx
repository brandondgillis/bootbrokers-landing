import React from "react";

type Heading = { id: string; label: string };

type BlogPostProps = {
  title: string;
  description: string;
  dateISO: string;          // "2025-12-14"
  readingMinutes: number;   // 7
  tags: string[];
  headings: Heading[];      // generated manually or via your markdown pipeline
  children: React.ReactNode;
};

export function BlogPost(props: BlogPostProps) {
  const { title, description, dateISO, readingMinutes, tags, headings, children } = props;

  const dateLabel = new Date(dateISO).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="blog-shell">
      <header className="blog-card blog-hero">
        <h1>{title}</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.9, margin: "10px 0 0 0" }}>
          {description}
        </p>

        <div className="blog-meta" style={{ marginTop: 14 }}>
          <span className="pill">{dateLabel}</span>
          <span className="pill">{readingMinutes} min read</span>
          {tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </header>

      <section className="blog-grid" style={{ marginTop: 22 }}>
        <div className="blog-card prose">{children}</div>

        {headings?.length ? (
          <aside className="toc" aria-label="Table of contents">
            <h4>On this page</h4>
            <nav>
              {headings.map((h) => (
                <a key={h.id} href={`#${h.id}`}>{h.label}</a>
              ))}
            </nav>
          </aside>
        ) : null}
      </section>
    </article>
  );
}
