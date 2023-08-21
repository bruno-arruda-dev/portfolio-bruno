
import { ProjectModalProvider } from '@/context/ProjectModalContext';
import '../styles/Global.css';
import { ComponentType } from 'react'

export default function App({ Component, pageProps }: { Component: ComponentType, pageProps: any }) {
  return (
    <ProjectModalProvider>
      <Component {...pageProps} />
    </ProjectModalProvider>
  );
}