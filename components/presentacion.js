import styles from 'components/styles/presentacion'

export default function Presentacion() {
    return (
        <section className="presentacion">
            <h2>Proyecto Final de Redacción</h2>
            
            <ul className="list-students">
                <li>Enrique</li>
                <li>Andres</li>
                <li>Erick</li>
            </ul>
            <style jsx>
                { styles }
            </style>
        </section>
    );
}
