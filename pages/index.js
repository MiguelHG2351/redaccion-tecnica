import Head from 'next/head'

export default function Home({ posts }) {
    console.log(posts)
    return <>
    <Head>
        <title>Inicio | Redacción Técnica</title>
    </Head>
    <h2>Hola</h2>
    <ul>
        <li>Enrique</li>
        <li>Miguel</li>
        <li>Andres</li>
        <li>Erick</li>
    </ul>
</>
}
