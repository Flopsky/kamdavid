import { Inter, Instrument_Serif, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' })
const grotesk = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-grotesk' })

export const metadata = {
  title: 'David Kamgang — HPC & Data Science Engineer',
  description: 'David Kamgang builds high-performance systems and AI tools. Projects include DeepManim, DeepGithub, ArXFlix and MarkThat.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${grotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
