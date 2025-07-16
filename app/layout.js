import './globals.css'

export const metadata = {
  title: 'Next.js Hello World',
  description: 'A simple Hello World app built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}