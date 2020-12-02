import Layout from "../components/Layout";
import Header from "../components/header";
import FnFooter from "../components/footer";


function MyApp(props) {
    const { Component, pageProps } = props;
    return (
        <>
            <Layout>
                <Header />
                <Component {...pageProps} />
                <FnFooter />    
            </Layout>
        </>
    );
}

export default MyApp;
