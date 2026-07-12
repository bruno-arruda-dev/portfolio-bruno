
import { ProjectModalProvider } from '@/context/ProjectModalContext';
import '../styles/Global.css';
import { ComponentType } from 'react'
import { appWithTranslation } from 'next-i18next/pages';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

function App({ Component, pageProps }: { Component: ComponentType, pageProps: any }) {
  return (
    <div className={poppins.className}>
      <ProjectModalProvider>
        <Component {...pageProps} />
      </ProjectModalProvider>
    </div>
  );
}

export default appWithTranslation(App);