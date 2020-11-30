import { useReducer, useEffect } from "react";

import styles, { cardStyle } from "components/styles/presentacion";

const Modal = ({ name, image, description, description2, isVisible, dispatch }) => {
    return (
        <>
            { isVisible &&
            <>
            <div className="modal">
                <div className="center">
                    <div className="image-user">
                        <img src={image} alt={name}/>
                    </div>
                    <div className="info-user">
                        <h2>{name}</h2>
                        <p>{ description }</p>
                        <p>{ description2 }</p>
                    </div>
                </div>
            </div>
            <div className="overlay" onClick={() => dispatch({type: 'hidden'})}></div>
            </>
            }
            <style jsx>
                { cardStyle }
            </style>
        </>
    )
};

export default function Presentacion() {
    function reducer(state, action) {
        switch (action.type) {
            case "Enrique":
                return {
                    name: "Rene Enrique Urbina Rivera",
                    image: 'https://outlook.office.com/owa/service.svc/s/GetPersonaPhoto?email=rene.urbina95u%40std.uni.edu.ni&UA=0&size=HR96x96',
                    description: 'Programador en Bajo Nivel con C/C++ ',
                    description2: 'Modelado 3D',
                    isVisible: true
                };
            case "Andre":
                return {
                    name: "Andre",
                    image: '/images/XD.png',
                    description: 'Programador con Python',
                    description2: 'C/++',
                    isVisible: true
                };
            case "Erick":
                return {
                    name: "Erick",
                    image: '/images/XD.png',
                    description: 'Universidad Nacional de Ingenieria',
                    description2: 'C/++',
                    isVisible: true
                };
            case "hidden":
                return {
                    name: "",
                    image: '',
                    description: '',
                    description2: '',
                    isVisible: false
                };
            default:
                break;
        }
    }

    const initialState = {
        name: '',
        image: '',
        description: '',
        description2: '',
        isVisible: false

    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        console.log(state)
    }, [state])
    

    function Enrique() {
        dispatch({type: 'Enrique'})
    }

    function Erick() {
        dispatch({type: 'Erick'})
    }

    function Andre() {
        dispatch({type: 'Andre'})
    }


    return (
        <section className="presentacion">
            <Modal {...state} dispatch={dispatch} />

            <h2>Proyecto Final de Redacción</h2>

            <ul className="list-students">
                <li onClick={Enrique}>Enrique</li>
                <li onClick={Andre}>Andre</li>
                <li onClick={Erick}>Erick</li>
            </ul>
            <style jsx>{styles}</style>
        </section>
    );
}
