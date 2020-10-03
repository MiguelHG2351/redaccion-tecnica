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

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://redaccion-tecnica.vercel.app/api/user')
    const posts = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }