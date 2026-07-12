import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext } from 'next/document'
import Analytics from '@/components/Analytics/Analytics';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/icon.ico" sizes="any" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
