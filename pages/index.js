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
                            <Link href="/search">
                                <a className="reset-value-anchor">Ver grupos</a>
                            </Link>
                        </button>
                    </div>
                    <div className="video-info">
                        <div className="title-info">
                            <h2>
                                El reproductor de videos es responsive design
                            </h2>
                            <p>
                                Para tener acceso desde todos los dispositivos
                                se aplico responsive design a todas las rutas
                                del sitio web
                            </p>
                        </div>
                        <img
                            src="/images/webp/home.webp"
                            className="responsive-img"
                            alt="XD"
                        />
                    </div>
                    <div className="facultades">
                        <div className="title-info">
                            <h2>Entrega de 2 facultades</h2>
                            <p>
                                Los estudiantes de la carrera de ingeniería en
                                computación y los de la facultad de tecnología
                                de la construcción
                            </p>
                        </div>
                        <img
                            src="/images/webp/facultades.webp"
                            className="responsive-img"
                            alt="XD"
                        />
                    </div>

                    <div className="profe">
                        <img
                            src="/images/webp/profe.webp"
                            className="responsive-img"
                            alt="XD"
                        />
                        <div className="title-info">
                            <h2>Profesora:  MARÍA DE LOURDES REYNOZA GÓMEZ</h2>
                            <h3>Departamento de Idiomas</h3>
                            <p>
                                Los estudiantes de la carrera de ingeniería en
                                computación y los de la facultad de tecnología
                                de la construcción
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <style jsx>{styles}</style>
        </>
    );
}
