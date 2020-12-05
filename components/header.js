import style from 'components/styles/header'
import { useState, useRef } from 'react'
import Link from 'next/link'

export default function Header () {
  const overlayRef = useRef(null)
  const [menu, setMenu] = useState('sidenav')

  function toggleMenu () {
    if (menu === 'sidenav') {
      setMenu('sidenav active')
      overlayRef.current.classList.toggle('active')
    } else {
      setMenu('sidenav')
    }
  }

  function closeMenu () {
    overlayRef.current.classList.remove('active')
    setMenu('sidenav')
  }

  return (
        <>
            <header className="header-site">
                <div className="container-header">
                    <div className={menu}>
                        <div className="container-sidenav">
                            <h1 className="desktop-h1">Redacción Técnica</h1>
                            <div className="profile">
                                <div className="background">
                                    <img
                                        loading="lazy"
                                        src="/images/background.jpeg"
                                        className="responsive-img"
                                        alt="Avatar del usuario"
                                    />
                                </div>
                                <div className="user-info">
                                    <div className="avatar">
                                        <img
                                            src="/images/webp/minecraft.webp"
                                            alt="Avatar del usuario"
                                        />
                                    </div>
                                    <p>rene.urbina95u.std.uni.edu.ni</p>
                                    <p>Rene Enrique Urbina Rivera</p>
                                </div>
                            </div>
                            <ul className="menu">
                                <li className="list-menu">
                                    <Link href="/">
                                        <a onClick={closeMenu}>
                                            <i className="material-icons">home</i>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className="list-menu">
                                    <Link href="/search">
                                        <a onClick={closeMenu}>
                                            <i className="material-icons">play_circle_filled</i>
                                            Videos
                                        </a>
                                    </Link>
                                </li>
                                <li className="list-menu">
                                    <Link href="/about">
                                        <a onClick={closeMenu}>
                                            <i className="material-icons">info</i>
                                            Acerca del sitio
                                        </a>
                                    </Link>
                                </li>
                                <li className="list-menu">
                                    <a onClick={closeMenu} href="https://uni.edu.ni" target="__blank" onClick={closeMenu}>
                                        <i className="material-icons">games</i>
                                        Web de la UNI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="header-visible">
                        <button className="btn btn-menu" onClick={toggleMenu}>
                            <i className="material-icons">sort</i>
                        </button>
                        <div className="title-site">
                            <h1>Redacción Técnica</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="overlay" ref={overlayRef} onClick={closeMenu}></div>
            <style jsx>{style}</style>
        </>
  )
}
