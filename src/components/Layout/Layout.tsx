import './Layout.css'
import React, { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout;
