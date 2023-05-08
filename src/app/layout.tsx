import './globals.css'
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'] })

export const metadata = {
  title: 'Portal de viagem - Garantida!',
  description: 'Portal do Turista Brasileiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
