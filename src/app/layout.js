import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
      </head>
       <body style={{ backgroundColor: 'rgb(33, 33, 33)',overflowX:"hidden" }} className={inter.className}>
        {children}
        </body>
    </html>
  )
}