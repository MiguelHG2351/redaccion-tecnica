import { withRouter } from 'next/router'

import { useState, useEffect } from 'react'
import MediaPlayer from "components/MediaPlayer";
import Head from "next/head";
import Link from "next/link";
import styles from 'styles/group'
import getData from 'data/info'


function GrupoVideo({router}) {

    
    
    const { carrera, video } = router.query

    const data = JSON.parse(getData)

    
    const [infoVideo, setInfoVideo] = useState({})
    // if(carrera != undefined && video != undefined) {
        // }
        
    useEffect(() => {
        let url;
        if(carrera != undefined) {
            url = data[carrera].find(element => element.name == video) || router.push('/')
            console.log(url)
            setInfoVideo(url)
        }

    }, [router.query])

    
    return (
        <>
            <Head>
                <title>Redacción | {infoVideo.name}</title>
            </Head>
            <div className="container">
                <section className="video-list">
                    {
                        <MediaPlayer video_url={infoVideo.url} />
                    }
                </section>
                <section className="groups">
                    <div className="background">
                        <img src="/images/FEC.png" alt="Imagen de fondo v:"/>
                    </div>
                    <Link href="/">
                        <a className="go-back">
                            <i className="material-icons">arrow_back</i>
                            <h3>Regresar</h3>
                        </a>
                    </Link>
                    {
                        carrera.length > 0 &&
                        data[carrera].map((data, index)=> {
                            return <>
                            <div className="header-group">
                                <h1>Grupo {index+1}</h1>
                            </div>
                            <ul className="list-group">
                                <div className="line"></div>
                                <li className="group">
                                    <i className="material-icons">check_circle</i>
                                    <Link href={`/${carrera}/${data.name}`}>
                                        <a>Grupo {index+1}</a>
                                    </Link>
                                </li>
    
                                <li className="group">
                                    <i className="material-icons">check_circle</i>
    
                                    <Link href="/group/2">
                                        <a>No hay Recursos</a>
                                    </Link>
                                </li>
                            </ul>
                        </>

                        })
                    }
                </section>
            </div>
            <style jsx>
                { styles }
            </style>
        </>
    );
}
// darle el id y cambiarlo por estados
export default withRouter(GrupoVideo)