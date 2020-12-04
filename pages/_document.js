import Document, { Head, NextScript, Html, Main } from "next/document";

export default class MyDocuemnt extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/images/favicon.ico" />
                    <meta name="og:url" content="https://redaccion-tecnica.vercel.app/" />
                    <meta name="og:image" content="/images/logo-uni.png" />
                    <meta name="og:description" content="Proyecto Final de redacción Técnica" />
                    <meta name="og:type" content="website" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
