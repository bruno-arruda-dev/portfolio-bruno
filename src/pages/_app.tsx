
import { ProjectModalProvider } from '@/context/ProjectModalContext';
import '../styles/Global.css';
import { ComponentType } from 'react'
import { LangProvider } from '@/context/LangContext';

export default function App({ Component, pageProps }: { Component: ComponentType, pageProps: any }) {
  return (
    <LangProvider>
      <ProjectModalProvider>
        <Component {...pageProps} />
      </ProjectModalProvider>
    </LangProvider>
  );
}