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
                    <link rel="icon" href="https://uni.edu.ni/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
