import './globals.css'
import { Inter, Montserrat, Noto_Sans_JP } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { metadata as rootMetadata } from './metadata'
import type { Metadata } from 'next'
import Navigation from './components/Navigation'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: "代々木駅前美容クリニック",
  description: "代々木駅前美容クリニックの公式ウェブサイトです。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${montserrat.variable} ${notoSansJP.variable}`}>
      <body>
        <Navigation />
        <Header />
        <main style={{ paddingTop: '4rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
