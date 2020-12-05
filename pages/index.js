import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home";

export default function Home() {
    return (
        <>
            <Head>
                <meta name="og:title" content="Home | Redacción Técnica" />
                <title>Home | Redacción Técnica</title>
                {/* <script type="text/javascript" src="/background.js"></script> */}
                <script type="text/javascript" src="/houdini.js"></script>
            </Head>
            <div className="presentacion random">
                <div className="go-group">
                    <div className="intro">
                        <h1>
                            Investigación <br />
                            Redacción Técnica
                        </h1>
                        <p>
                            El siguiente trabajo es parte de la Investigación para la
                            clase Redacción Técnica del segundo semestre de ingeniería
                            en computación grupo 1m2-co
                        </p>
                    </div>
                    <div className="button-group">
                        <button className="btn btn-primary">
                            <Link href="/search">
                                <a className="reset-value-anchor">Ver grupos</a>
                            </Link>
                        </button>
                        <button className="btn btn-secondary">
                            <Link href="/search">
                                <a className="reset-value-anchor">buscar grupos</a>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="image">
                    <img src="/images/webp/FEC.webp" className="responsive-img" alt="XD" />
                    {/* <img/> */}
                    <div className="xd">
                        <img src="/images/rectangle.svg" className="background" alt="XD"/>
                    </div>
                </div>
            </div>
            <section className="container">
                <section className="content">
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
                            <h2 style={{ textAlign: "center" }}>
                                MARÍA DE LOURDES REYNOZA GÓMEZ
                            </h2>
                            <h3 style={{ fontSize: "18px" }}>
                                Departamento de Idiomas
                            </h3>
                            <p>
                                Investigación documental de carreras en
                                ingeniería en computación y agrícola de la
                                universidad nacional de ingeniería
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <style jsx>{styles}</style>
        </>
    );
}
