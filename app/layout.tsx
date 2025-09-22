import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YumixArt - Premium Mobile Wallpapers',
  description: 'Discover stunning premium wallpapers for your mobile device. 90s style, memoji silhouettes, and exclusive collections.',
  keywords: 'wallpapers, mobile wallpapers, premium wallpapers, 90s style, memoji, collections',
  authors: [{ name: 'YumixArt Team' }],
  openGraph: {
    title: 'YumixArt - Premium Mobile Wallpapers',
    description: 'Discover stunning premium wallpapers for your mobile device. 90s style, memoji silhouettes, and exclusive collections.',
    url: 'https://yumixart.com',
    siteName: 'YumixArt',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YumixArt - Premium Mobile Wallpapers',
    description: 'Discover stunning premium wallpapers for your mobile device.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-sf-pro antialiased bg-neutral-900" style={{ backgroundColor: '#171717' }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('darkMode');
                const isDark = theme === null ? true : theme === 'true';
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.body.style.backgroundColor = '#171717';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.body.style.backgroundColor = '#ffffff';
                }
              } catch (e) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
