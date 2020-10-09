import Layout from "../components/Layout";
import Header from '../components/header'

// Next
import App from "next/app";
import Head from "next/head";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
            <Layout>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                    <Header />
                    <Component { ...pageProps } />
            </Layout>
            </>
        );
    }
}

export default MyApp