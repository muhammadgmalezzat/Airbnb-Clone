import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar/Navbar'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone with Nextjs 13 ',
}
const font = Nunito({
  subsets:["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
