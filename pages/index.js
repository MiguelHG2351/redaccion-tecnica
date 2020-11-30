import Head from 'next/head'
import Presentacion from 'components/presentacion'
import Card from 'components/card'
import style from '../styles/'

export default function Home ({ posts }) {
  console.log(posts)
  return <>
    <Head>
        <title>Inicio | Redacción Técnica</title>
        <link rel="icon" href="https://uni.edu.ni/favicon.ico"/>
    </Head>
    <Presentacion />
    <div className="container">
      <Card/>
      <Card/>
      <Card/>
      <Card/>

    </div>
    <style jsx>
      { style }
    </style>
</>
}

export async function getStaticProps () {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://redaccion-tecnica.vercel.app/api/user')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    }
  }
}
