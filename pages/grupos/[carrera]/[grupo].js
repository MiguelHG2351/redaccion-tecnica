import { useRouter } from "next/router";
import Head from "next/head";
import styles from 'styles/grupo'
import getData from 'firebase_client/client'



export default function Grupo(props) {
    const router = useRouter();
    const { grupo, carrera } = router.query;
    console.log(props)

    return (
        <>
            <Head>
                <title>Redacción</title>
            </Head>
            <section className="section-search">
                <form>
                    <input type="text" name="videoID" placeholder="buscar dispositivo"/>
                </form>
            </section>
            <style jsx>
                { styles }
            </style>
        </>
    );
}

export async function getStaticProps() {

    let data = getData()
    return {
        props: data
    }
}