import ProjectModal from '@/components/ProjectModal/ProjectModal';
import '../styles/Global.css';
import Head from 'next/head'
import { ComponentType } from 'react'

export default function App({ Component, pageProps }: { Component: ComponentType, pageProps: any }) {
  return (
    <>
      <Component {...pageProps} />
      <ProjectModal />
    </>
  );
}
