import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import { Provider } from '@shopify/app-bridge-react';
import translations from '@shopify/polaris/locales/en.json';
import ClientRouter from '../components/ClientRouter';
//libs
import Cookies from 'js-cookie';
import React from "react";
import ReactDOM from "react-dom";


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
        return ( 
            <React.Fragment>
                <Head>
                    <title> Sample App </title>
                    <meta charSet = "utf-8" />
                </Head>
                <Provider config={config}>
                    <ClientRouter />
                    <AppProvider i18n={translations}>
                        <Component {...pageProps }/>
                    </AppProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

export default MyApp;