import React, { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'
import Head from 'next/head'

interface LayoutProps {
  title: string,
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (

    <div className='layout'>

      <Head>
        <title>
          {title}
        </title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" ></link>
      </Head>

      <Navbar />

      {children}

    </div>
  )
}

export default Layout;