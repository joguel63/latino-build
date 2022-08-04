import React, { useState, useEffect } from "react";
import MetisMenu from "@metismenu/react";
import "metismenujs/dist/metismenujs.css";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  const [tabletView, setTabletView] = useState(false);
  const controlMenu = () => {
    if (window.innerWidth < 992) {
      setTabletView(true);
    } else {
      setTabletView(false);
    }
    window.addEventListener("resize", controlMenu);
  };
  useEffect(() => {
    controlMenu();
  }/*, [tabletView]*/);

  const showMenu = props.showMenu;
  const navClass = showMenu ? "tablet-menu show" : "tablet-menu";
  return (
    <div className={tabletView ? `${navClass}` : "menu"}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <nav className="topbar-nav">
              <MetisMenu className="metismenu" id="metismenu" toggle={true}>
                <li>
                  <Link to="/">
                    <span className="fa fa-home"></span> Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/calendar">
                    <span className="fa fa-newspaper-o"></span> Noticias
                  </Link>
                </li>
                <li>
                  <a className="has-arrow" href="https://www.google.com/">
                    <span className="fa fa-users "></span> NOSOTROS
                  </a>
                  <ul>
                    <li>
                      <Link to="/history">Historia</Link>
                    </li>
                    <li>
                      <Link to="/direction_board">Junta directiva</Link>
                    </li>
                    <li>
                      <Link to="/administrative_personal">Personal administrativo</Link>
                    </li>
                    <li>
                      <Link to="/regulations">Reglamentos</Link>
                    </li>
                    <li>
                      <Link to="/statutes">Estatutos</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/spaces">
                    <span className="fa fa-university"></span>
                    Instalaciones
                  </Link>
                </li>
                <li>
                  <a className="has-arrow" href="https://www.google.com/">
                    <span className="fa fa-futbol-o"></span> Escuelas deportivas
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <Link to="/message">Karate</Link>
                    </li>
                    <li>
                      <Link to="/chat">Beisbol</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    className="has-arrow"
                    href="https://www.google.com/"
                    aria-expanded="false"
                  >
                    <span className="fa fa-cog"></span> Configuracion
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <Link to="/profile">Perfil</Link>
                    </li>
                    <li>
                      <Link to="/payment">Deuda</Link>
                    </li>
                  </ul>
                </li>
              </MetisMenu>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
