import Link from 'next/link'
import styles from 'components/styles/card' 

export default function Card({ name, title }) {
    return (
        <>
            <Link href="/group">
                <a>
                    <div className="card">
                        <div className="header-card">
                            <img src="/images/xd.png" alt="Primer grupo"/>
                        </div>
                        <div className="content-card">
                            <div className="info-group">
                                <h3>{ name }</h3>
                                <p>{ title }</p>
                            </div>
                            <div className="time">
                                <small>Time: 12 Min</small>
                                <p>Archivos: 12</p>
                                
                            </div>
                        </div>
                        
                    </div>

                </a>
            </Link>
            <style jsx>
                { styles }
            </style>
        </>
    )
}