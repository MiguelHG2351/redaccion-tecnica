import Layout from "../components/Layout";
import Header from "../components/header";

function MyApp(props) {
    const { Component, pageProps } = props;
    return (
        <>
            <Layout>
                <Header />
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
