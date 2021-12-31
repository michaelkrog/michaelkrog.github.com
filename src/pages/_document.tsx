import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <script type="module" src="https://cdn.jsdelivr.net/npm/@apaq/stallion@1.0.0-alpha.27/dist/stallion/stallion.esm.js"></script>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@apaq/stallion@1.0.0-alpha.27/dist/stallion/stallion.css"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
