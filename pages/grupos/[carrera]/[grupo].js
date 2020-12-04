import {useEffect } from 'react'
import { useRouter } from "next/router";
import MediaPlayer from "components/MediaPlayer";
import Head from "next/head";
import Link from "next/link";
import styles from 'styles/group'
import getData from 'data/info'


export default function Grupo(props) {
    const router = useRouter();

    // function reducer(state, action) {
    //     return 
    // }

    const { grupo, carrera } = router.query;
    const [stateURL, dispatch] = useReducer(reducer, initialState)
    const data = JSON.parse(getData)
    
    useEffect(() => {
        let getData = data["agricola"].find(p => p.name == 'Abonos organicos')
        
    }, [])

    return (
        <>
            <Head>
                <title>Redacción</title>
            </Head>
            <div className="container">
                <section className="video-list">
                    <MediaPlayer video_url={"https://firebasestorage.googleapis.com/v0/b/redaccion-tecnica-f79d8.appspot.com/o/videos%2Fagricola%2FCultivo%20del%20cacao.mp4?alt=media&token=7b9a7c2e-0209-4a79-b7c9-b6fa551ac695"} />
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
                    <div className="header-group">
                        <h1>Grupo 1</h1>
                    </div>
                    <ul className="list-group">
                        <div className="line"></div>
                        <li className="group">
                            <i className="material-icons">check_circle</i>
                            <Link href="/grupos/first">
                                <a>Grupo 1</a>
                            </Link>
                        </li>

                        <li className="group">
                            <i className="material-icons">check_circle</i>

                            <Link href="/group/2">
                                <a>Recursos</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="header-group">
                        <h1>Grupo 2</h1>
                    </div>
                    <ul className="list-group">
                        <div className="line"></div>
                        <li className="group">
                            <i className="material-icons">check_circle</i>

                            <Link href="/group/3">
                                <a>Grupo 2</a>
                            </Link>
                        </li>
                        <li className="group">
                            <i className="material-icons">check_circle</i>

                            <Link href="/group/4">
                                <a>Recursos</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="header-group">
                        <h1>Grupo 3</h1>
                    </div>
                    <ul className="list-group">
                        <div className="line"></div>
                        <li className="group">
                            <i className="material-icons">check_circle</i>

                            <Link href="/group/3">
                                <a>Grupo 3</a>
                            </Link>
                        </li>
                        <li className="group">
                            <i className="material-icons">check_circle</i>

                            <Link href="/group/3">
                                <a>Recursos</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="header-group">
                        <h1>Grupo 4</h1>
                    </div>
                    <ul className="list-group">
                        <div className="line"></div>
                        <li className="group">
                            <i className="material-icons">check_circle</i>

                            <Link href="/group/3">
                                <a>Grupo 4</a>
                            </Link>
                        </li>
                        <li className="group">
                            <i className="material-icons">check_circle</i>

                            <Link href="/group/3">
                                <a>Recursos</a>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <style jsx>
                { styles }
            </style>
        </>
    );
}
// darle el id y cambiarlo por estados