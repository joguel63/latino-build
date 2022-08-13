import React, { useState, useEffect } from "react";
import MetisMenu from "@metismenu/react";
import "metismenujs/dist/metismenujs.css";
import NavMenuItem from "./widgets/nav_menu_item";

export default function NavMenuDashboard(props) {
  const [tabletView, setTabletView] = useState(false);
  const controlMenu = () => {
    if (window.innerWidth < 992) {
      setTabletView(true);
    } else {
      setTabletView(false);
    }
    window.addEventListener("resize", controlMenu);
  };
  useEffect(
    () => {
      controlMenu();
    } /*, [tabletView]*/
  );

  const showMenu = props.showMenu;
  const navClass = showMenu ? "tablet-menu show" : "tablet-menu";
  return (
    <div className={tabletView ? `${navClass}` : "menu"}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <nav className="topbar-nav">
              <MetisMenu className="metismenu" id="metismenu" toggle={true}>
                <NavMenuItem
                  title="Usuarios"
                  icon="fa fa-users"
                  route="/dashboard/users"
                />
                <NavMenuItem
                  title="Noticias"
                  icon="fa fa-newspaper-o"
                  route="/dashboard/news"
                />
                <NavMenuItem
                  title="Reservas"
                  icon="fa fa-briefcase"
                  route="/dashboard/reservations"
                />
              </MetisMenu>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
