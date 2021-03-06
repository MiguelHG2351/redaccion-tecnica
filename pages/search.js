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
    const [wait, setWait] = useState('')
    const parseData = JSON.parse(data)

    function searchGroup(e) {
        if(letter.length == 1) setWait('Buscando')
        if(carrera.length > 0) {
            setLetter(e.currentTarget.value)
            
        }
    }
    
    function changeStateWait() {
        if(letter.length == 0) setWait('')
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
                    <input type="text" onInput={searchGroup} name="video" onBlur={changeStateWait}/>
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
        <section className="search-video">
            <h3>Resultados de búsqueda:</h3>
        </section>
        <section className="options">
            {
                // levenshtein.get(e.currentTarget.value)
                letter.length > 8 ?
                parseData[carrera].map((data, index) => {
                    // debugger
                    if(data.name.toLowerCase().indexOf(letter.toLowerCase()) >= 0) {
                        return <Card key={index} videos={12} name={data.name} images={data.image} title={data.carrera} link={data.link+data.name} />
                    }
                })
                :
                <p>{wait}</p>
                // console.log(e.currentTarget.value)
            }
        </section>
        <div className="search-video">
            <h3>Ir Directo a una carrera en especifica</h3>
        </div>
        <section className="options">
            <Card videos={12} name="Ingeniería agricola" images='/images/webp/agricola.webp' title="Facultdad: FTC" link="/agricola/Cultivo%20del%20cacao" />
            <Card videos={1} name="Ingeniería civil" images='/images/civil.jpeg' title="Facultad: FTC" link="/civil/Construcción de invernaderos sostenibles" />
            <Card videos={4} name="Ingeniería en Computación" images='/images/webp/computacion.webp' title="Facultad: FEC" link="/computacion/La comunicacion en el area de la tecnologia" />
        </section>
        <style jsx>
            { styles }
        </style>
    </>)
}