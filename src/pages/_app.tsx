
import { ProjectModalProvider } from '@/context/ProjectModalContext';
import '../styles/Global.css';
import { ComponentType } from 'react'
import { appWithTranslation } from 'next-i18next/pages';

function App({ Component, pageProps }: { Component: ComponentType, pageProps: any }) {
  return (
    <ProjectModalProvider>
      <Component {...pageProps} />
    </ProjectModalProvider>
  );
}

export default appWithTranslation(App);