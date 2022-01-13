import { AppProps } from 'next/app';
//import '../styles/markdown.css'
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
