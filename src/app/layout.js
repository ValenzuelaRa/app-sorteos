import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Logo Image */}
        <link
          rel="preload"
          href="/_next/static/media/logo.81f937da.png"
          as="image"
          type="image/png"
          sizes="100x100"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
