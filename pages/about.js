import Head from "next/head";
import styles from "styles/about";

export default function About() {
    return (
        <>
            <Head>
                <title>Acerca del sitio</title>
                <meta name="description" content="Breve descripción del sitio web"/>
            </Head>
            <section className="container">
                <div className="header-about">
                    <h1>Acerca de este sitio</h1>
                </div>
                <div className="description">
                    <div className="image-description">
                        <img src="/images/programacion.jpg" className="responsive-img" alt="Programación"/>
                    </div>
                    <div className="info">
                        <p>
                            Este sitio ha sido creado con propósitos académicos e
                            informativos para la asignatura de redacción técnica de la
                            carrera de ingeniería en computación en el año 2020 de la
                            universidad nacional de ingeniería.
                        </p>
                    </div>

                </div>
                <br/>

                <p>
                    Facultad de electrotecnia y computación Departamento de
                    idiomas Grupo 1M2-CO
                </p>
                <br/>

                <p>Docente: MARÍA DE LOURDES REYNOZA GÓMEZ</p>
                <br/>

                <p>
                    Proyecto llevado a cabo bajo la dirección de: Rene Enrique
                    Urbina Rivera Erick Joao Espinoza Donayre André Valentín
                    Rivas Velasquez
                </p>
                <br/>

                <p>
                    Este sitio fue creado con: -tecnologia x -tecnologia y
                    -tecnologia z etc. (metele todo lo que usaste para crearlo)
                </p>
                <br/>
                
                <p>
                    Agradecimientos especiales a: Miguel Angel Hernández Gaitán
                    ~ Desarrollador web/Frontend development/javascript,html y
                    CSS ~ Asesoría y soporte tecnico
                </p>
                <br/>
                <img src="/images/process-back.png" className="responsive-img" alt="Proceso del sitio web"/>
            </section>
            <h1>._.XD</h1>
            <style jsx>{styles}</style>
        </>
    );
}
