import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  author: "Jesus Reyes",
  title: 'Pokemon Page',
  description: 'This is A Pokemon App',
  keywords: "Pokemon, Pikachu,Pokedex",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true}  className={inter.className}>{children}</body>
    </html>
  )
}
