import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles/reset';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles}/>
      <Component {...pageProps} />
    </>
  )
}
