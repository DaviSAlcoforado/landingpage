import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ToastProvider } from "react-toast-notifications";
import { AppComponent } from '../src/app/App.jsx';
import theme from '../src/app/app.theme';

class MyApp extends App {
  render() {
    const {Component, pageProps } = this.props
    return (
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <AppComponent
              Component={Component}
              pageProps={pageProps} />
          </ToastProvider>
        </ThemeProvider>
    )
  }
}

export default MyApp;