import React from 'react'
import Link from 'next/link'

// Styles
import styles from '../styles/group'


export default function Group() {
    return <>
    <div className="container">
        <section className="groups">
            <div className="header-menu">
                <h1>Grupos de redacción</h1>
            </div>
            <ul className="list-group">
                <div className="line"></div>
                <li className="group">
                    <i className="material-icons">check_circle</i>
                    <Link href="/grupos/first">
                        <a>
                            Grupo 1
                        </a>
                    </Link>
                </li>
                <li className="group">
                    <i className="material-icons">check_circle</i>

                    <Link href="/group/2">
                        <a>
                            Grupo 2
                        </a>
                    </Link>
                </li>
                <li className="group">
                    <i className="material-icons">check_circle</i>

                    <Link href="/group/3">
                        <a>
                            Grupo 3
                        </a>
                    </Link>
                </li>
                <li className="group">
                    <i className="material-icons">check_circle</i>

                    <Link href="/group/4">
                        <a>
                            Grupo 4
                        </a>
                    </Link>
                </li>
            </ul>
        </section>
        <section className="video-list">
        </section>
    </div>

    <style jsx>
        {styles}
    </style>
</>
}