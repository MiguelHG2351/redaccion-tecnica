import Link from 'next/link'
import styles from 'components/styles/card' 

export default function Card({ name, title, link, images, videos }) {
    return (
        <>
            <Link href={link}>
                <a title={ title }>
                    <div className="card">
                        <div className="header-card">
                            <img src={images} className="responsive-img" alt="Primer grupo"/>
                        </div>
                        <div className="content-card">
                            <div className="info-group">
                                <h3>{ name }</h3>
                                <p>{ title.length > 20 ? title.replace(title.slice(20, title.length), '...') : title  }</p>
                            </div>
                            <div className="time">
                                <small>Videos: {videos}</small>
                                <br/>
                                <small>Archivos: {videos}</small>
                                
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