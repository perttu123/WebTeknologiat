
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NAVBAARI from './components/navibaari';

import { fetchData } from './apihaku';
import HakuPalkki from './components/hakupalkki'
const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const data = await fetchData();

  return (<>
    <html lang="en">
      <body className={inter.className}>
        <NAVBAARI />
      <div className="flex">
      <div className="w-4/5">
        {children}
      </div>
      <div className="w-1/5">
        <HakuPalkki importData={data}/> 
      </div>
        </div>
      </body>
    </html>
    </>
  )
}

