import Head from 'next/head'
import styles from "../styles/home";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Redacción Técnica</title>
                <script type="text/javascript" src='/houdini.js'></script>
            </Head>
            <section className="container">
                <h3>Investigación <br/>Redacción Técnica</h3>
                <p>El siguiente trabajo es parte de la Investigación para la clase Redacción Técnica del segundo semestre de
                     ingeniería en computación grupo 1m2-co
                </p>
                <section className="content">
                    <button className="btn btn-primary">Ver grupos</button>
                </section>
            </section>
            <style jsx>{styles}</style>
        </>
    );
}
