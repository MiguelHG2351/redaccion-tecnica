import { useState } from 'react'
import Head from 'next/head'
import styles from 'styles/videos'
import Card from 'components/card'
import data from 'data/info-search'
// import levenshtein from 'fast-levenshtein'

export default function Videos() {

    const [carrera, setCarrera] = useState('')
    const [filter, setFilter] = useState('')
    const [letter, setLetter] = useState('')
    const parseData = JSON.parse(data)

    function searchGroup(e) {
        if(carrera.length > 0) {
            setLetter(e.currentTarget.value)

        }
    }

    function search(e) {
        e.preventDefault()
    }

    return (
    <>
        <Head>
            <title>Redacción Técnica | Búsqueda</title>
        </Head>
        <section className="search-video">
            <form className="form" onSubmit={search}>
                <div className="background-search">
                    <input type="text" onInput={searchGroup} name="video"/>
                    <div className="summary" onClick={() => setFilter(!filter)}>
                        <button className="btn"><i className="material-icons">filter_alt</i></button>
                    </div>
                        {
                            filter &&
                            <div className="list">
                                <div onClick={ () => { setFilter(!filter); setCarrera('agricola')} } className="agricola">Agricola</div>
                                <div onClick={ () => { setFilter(!filter); setCarrera('civil')} } className="civil">Civil</div>
                                <div onClick={ () => { setFilter(!filter); setCarrera('computacion')} } className="computacion">Computación</div>
                            </div>
                            
                        }
                </div>
            </form>
        </section>
        <section className="options">
            {
                // levenshtein.get(e.currentTarget.value)
                letter.length > 8 &&
                parseData[carrera].map((data, index) => {
                    // debugger
                    if(data.name.indexOf(letter) >= 0) {
                        return <Card key={index} videos={12} name={data.name} images={data.image} title={data.carrera} link={data.link+data.name} />

                    }
                })
                // console.log(e.currentTarget.value)
            }
        </section>
        <div className="search-video">
            <h2>Ir Directo a una carrera en especifica</h2>
        </div>
        <section className="options">
            <Card videos={12} name="Ingeniería agricola" images='https://archivodenoticias.uni.edu.ni/img/Articulos/2019/01/28//20190125_090811.jpg' title="Facultdad: FTC" link="/agricola/Cultivo%20del%20cacao" />
            <Card videos={1} name="Ingeniería civil" images='https://uni.edu.ni/assets/images/seleccion/civil%20ch.jpeg' title="Facultad: FTC" link="/civil/Construcción de invernaderos sostenibles" />
            <Card videos={4} name="Ingeniería en Computación" images='https://uni.edu.ni/assets/images/rusb/021.jpg' title="Facultad: FEC" link="/computacion/La comunicacion en el area de la tecnologia" />
        </section>
        <style jsx>
            { styles }
        </style>
    </>)
}