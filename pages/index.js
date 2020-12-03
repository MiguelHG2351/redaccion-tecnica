import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home";

export default function Home() {
    return (
        <>
            <Head>
                <meta name="og:title" content="Home | Redacción Técnica" />
                <title>Home | Redacción Técnica</title>
                <script type="text/javascript" src="/houdini.js"></script>
            </Head>
            <section className="container">
                <h3>
                    Investigación <br />
                    Redacción Técnica
                </h3>
                <p>
                    El siguiente trabajo es parte de la Investigación para la
                    clase Redacción Técnica del segundo semestre de ingeniería
                    en computación grupo 1m2-co
                </p>
                <section className="content">
                    <div className="go-group">
                        <button className="btn btn-primary">
                            <Link href="/groups">
                                <a className="reset-value-anchor">
                                    Ver grupos
                                </a>
                            </Link>
                        </button>
                    </div>
                    <div className="video-info">
                        <h2>El reproductor de videos es responsive design</h2>
                        <img
                            src="/images/home.png"
                            className="responsive-img"
                            alt="XD"
                        />
                    </div>
                    <div className="facultades">
                        <h2>Entrega de 3 facultades</h2>
                        <img
                            src="/images/facultades.png"
                            className="responsive-img"
                            alt="XD"
                        />
                    </div>
                </section>
            </section>
            <style jsx>{styles}</style>
        </>
    );
}
