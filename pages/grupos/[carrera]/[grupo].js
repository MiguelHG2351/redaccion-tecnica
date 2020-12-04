import { useRouter } from "next/router";
import Head from "next/head";
import styles from 'styles/grupo'
import Axios from "axios";

export default function Grupo(props) {
    const router = useRouter();
    const { grupo, carrera } = router.query;
    return (
        <>
            <Head>
                <title>Redacción | {grupo}</title>
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

export async function getServerSideProps({req}) {

    // const BASE_URL = req ?`${req.protocol}://${req.get('Host')}` : '';
    const BASE_URL = 'http://localhost:3000'
    const response = await Axios.get(`${BASE_URL}/api/getVideo`)
    const data = response.data

    return ({
      props: {data}, // will be passed to the page component as props
    })
  }