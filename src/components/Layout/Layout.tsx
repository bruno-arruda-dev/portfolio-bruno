import React, { ReactNode } from 'react';
import ProjectModal from '@/components/ProjectModal/ProjectModal';
import Navbar from '../Navbar/Navbar';
import Head from 'next/head';
import NavbarMobile from '../NavbarMobile/NavbarMobile';

interface LayoutProps {
  title: string,
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (

    <>

      <Head>
        <title>{title}</title>
      </Head>

      <ProjectModal />
      <Navbar />
      <NavbarMobile />
      {children}

    </>
  )
}

export default Layout;