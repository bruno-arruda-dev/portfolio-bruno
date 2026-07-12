import React, { ReactNode } from 'react';
import ProjectModal from '@/components/ProjectModal/ProjectModal';
import Navbar from '../Navbar/Navbar';
import Head from 'next/head';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  title: string,
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const { t } = useTranslation('common');

  return (

    <>

      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t('meta_description')} />
        <meta name="keywords" content="Bruno Arruda, portfolio, web developer, nextjs, react, typescript, nodejs, frontend, fullstack" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={t('meta_description')} />
        <meta property="og:url" content="https://portfolio-bruno-kappa.vercel.app/" />
        <meta property="og:image" content="https://portfolio-bruno-kappa.vercel.app/images/allProjects/portfolio.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={t('meta_description')} />
        <meta property="twitter:image" content="https://portfolio-bruno-kappa.vercel.app/images/allProjects/portfolio.png" />
      </Head>

      <ProjectModal />
      <Navbar />
      <NavbarMobile />
      {children}

    </>
  )
}

export default Layout;