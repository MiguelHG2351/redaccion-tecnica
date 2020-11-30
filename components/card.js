import styles from 'components/styles/card' 

export default function Card() {
    return (
        <>
            <div className="card">
                <div className="header-card">
                    <img src="/images/xd.png" alt="Primer grupo"/>
                </div>
                <div className="content-card">
                    <div className="info-group">
                        <h3>Grupo 1</h3>
                        <p>La importancia de JavaScript</p>
                    </div>
                    <div className="time">
                        <small>Time: 12 Min</small>
                        <p>Archivos: 12</p>
                        
                    </div>
                </div>
                
            </div>
            <style jsx>
                { styles }
            </style>
        </>
    )
}