import { Inter } from 'next/font/google'
import './globals.css'
import Loading from './loading';
import { Suspense } from 'react'
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie App',
  description: 'Movie App Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " w-screen h-screen bg-background"} >
        <Suspense fallback={<Loading />}>
          <div className="pb-28">
            {children}
          </div>
          <Navbar />
        </Suspense>
      </body>
    </html>
  )
}
