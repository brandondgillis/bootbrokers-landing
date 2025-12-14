export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://bootbrokers.co';

  const staticPages = [
    '',
    '/blog/list',
    '/blog/ultimate-boot-buying-guide',
    '/blog/best-online-marketplaces',
    '/blog/boot-brokers-standards',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((url) => {
      return `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${url === '' ? 'weekly' : 'monthly'}</changefreq>
      <priority>${url === '' ? '1.0' : '0.8'}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
