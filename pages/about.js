import Head from "next/head";
import styles from "styles/about";

export default function About() {
    return (
        <>
            <Head>
                <title>Acerca del sitio</title>
                <meta
                    name="description"
                    content="Breve descripción del sitio web"
                />
            </Head>
            <section className="container">
                <div className="description left">
                    <div className="image-description">
                        <img
                            src="/images/programacion.jpg"
                            className="responsive-img"
                            alt="Programación"
                        />
                    </div>
                    <div className="info">
                        <h1>Acerca de este sitio</h1>
                        <div className="text">
                            <p>
                                Este sitio ha sido creado con propósitos académicos
                                e informativos para la asignatura de redacción
                                técnica de la carrera de ingeniería en computación
                                en el año 2020 de la universidad nacional de
                                ingeniería.
                            </p>
                            <br />
                            <p>
                                Facultad de electrotecnia y computación Departamento
                                de idiomas Grupo 1M2-CO.
                            </p>
                            <br />
                            <p>Docente: MARÍA DE LOURDES REYNOZA GÓMEZ.</p>
                            <br />
                        </div>
                    </div>
                </div>
                <br />
                <section className="description right">
                    <div className="images-description">
                        <img
                            src="/images/webp/team.webp"
                            alt="XD"
                            className="responsive-img"
                        />

                    </div>
                    <div className="info">
                        <h2>Descripción del proyecto</h2>
                        <div className="text">
                            <p>
                                Proyecto llevado a cabo bajo la dirección de: <b>Rene Enrique
                                Urbina</b> <b>Rivera Erick Joao Espinoza Donayre</b> <b>André Valentín
                                Rivas Velasquez</b>.
                            </p>
                            <br />

                            <p>
                                Este sitio fue creado con: ReactJS, NextJS, Firebase,
                                Styled/jsx, NodeJS, ESLint (Linter de JavaScript) y Prettier
                                (Format Document) con <b>deploy</b> en Vercel (Serverless) con administración de versiones con Git y GitHub.
                            </p>
                            <br />

                            <p>
                                Agradecimientos especiales a: Miguel Angel Hernández Gaitán
                                ~ Desarrollador Web/Frontend Development/JavaScript, HTML y
                                CSS ~ Asesoría y soporte tecnico.
                            </p>
                            <br />

                        </div>
                    </div>

                </section>

                <section className="description left">
                    <div className="image-description">
                        <img
                            src="/images/process-back.png"
                            className="responsive-img"
                            alt="Proceso del sitio web"
                        />
                    </div>
                    <div className="info">
                        <h2>Representación de como funciona el sitio web</h2>
                    </div>
                </section>
            </section>
            <style jsx>{styles}</style>
        </>
    );
}
