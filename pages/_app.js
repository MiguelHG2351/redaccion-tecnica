import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from "../components/Layout";
import Header from "../components/header";
import FnFooter from "../components/footer";


function MyApp(props) {

    const router = useRouter()

    const { Component, pageProps } = props;
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, user-scalable=no"/>
            </Head>
            <Layout>
                <Header />
                <Component {...pageProps} />
                {
                    router.pathname != "/[carrera]/[video]" &&
                    <FnFooter />    

                }
            </Layout>
        </>
    );
}

export default MyApp;
