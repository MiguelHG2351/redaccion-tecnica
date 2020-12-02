import Link from 'next/link'
import styles from 'components/styles/card' 

export default function Card({ name, title }) {
    return (
        <>
            <Link href="/group">
                <a title={ title }>
                    <div className="card">
                        <div className="header-card">
                            <img src="/images/xd.png" alt="Primer grupo"/>
                        </div>
                        <div className="content-card">
                            <div className="info-group">
                                <h3>{ name }</h3>
                                <p>{ title.replace(title.slice(20, title.length), '...') }</p>
                            </div>
                            <div className="time">
                                <small>Time: 12 Min</small>
                                <br/>
                                <small>Archivos: 12</small>
                                
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