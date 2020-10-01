import React from 'react';
import Head from "next/head";
import globalStyle from './style.css'
import GlobalStyle from './global-styles';
const App = ({ Component, pageProps }) => {
  return (
      <div className={globalStyle.Layout}>
          <GlobalStyle />
          <Head>
            {/* <link rel="icon" href={zeroVenenoLogo} /> */}
            <meta
              name="description"
              content="Sorteis variados"
            />
            <meta name="keywords" content="delivery,orgânico,recife,hortaliças,natural,saudável,vegetariano,vegano,frutas" />
            <meta name="author" content="Valdery Alves Paes Júnior <valdery.jur@gmail.com> (http://valderyalves.com)" />
            <meta charset='utf-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <link rel="manifest" href="/manifest.json" />
            <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
            <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#317EFB"/>
            <title>Base teste</title>
          </Head>
          <Component {...pageProps} />
      </div>
  )
}
export const AppComponent = App;