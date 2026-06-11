export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav style={{ padding: '20px', backgroundColor: '#000', color: '#fff' }}>
          <a href="/" style={{ marginRight: '20px', color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="/videos" style={{ color: '#fff', textDecoration: 'none' }}>Videos</a>
        </nav>
        {children}
      </body>
    </html>
  );
}