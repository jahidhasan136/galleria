'use client'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { HelmetProvider } from 'react-helmet-async'


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <HelmetProvider>
        <Header />
        <body>{children}</body>
        <Footer />
      </HelmetProvider>
    </html>
  )
}
