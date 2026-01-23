import './globals.css'

export const metadata = {
  title: 'SUper cool stuff coming Hello World',
  description: 'A simple Hello World app built with Next.js ooooh yeah',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
