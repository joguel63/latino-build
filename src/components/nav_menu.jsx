import React, { useState, useEffect } from "react";
import MetisMenu from "@metismenu/react";
import "metismenujs/dist/metismenujs.css";
import NavMenuItem from "./widgets/nav_menu_item";

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
                  title="Inicio"
                  icon="fa fa-home"
                  route="/"
                ></NavMenuItem>
                <NavMenuItem
                  title="Blog"
                  icon="fa fa-newspaper-o"
                  route="/blog"
                ></NavMenuItem>
                <NavMenuItem
                  title="Nosotros"
                  icon="fa fa-users"
                  subitems={[
                    { link: "/history", label: "Historia" },
                    { link: "/presidents", label: "Galería de presidentes" },
                    { link: "/direction_board", label: "Junta directiva" },
                    {
                      link: "/administrative_personal",
                      label: "Personal administrativo",
                    },
                    { link: "/regulations", label: "Reglamentos" },
                    { link: "/statutes", label: "Estatutos" },
                  ]}
                ></NavMenuItem>
                <NavMenuItem
                  title="Instalaciones"
                  icon="fa fa-university"
                  route="/spaces"
                ></NavMenuItem>
                <NavMenuItem
                  title="Cultura"
                  icon="fa fa-music "
                  subitems={[
                    { link: "/culture_coral", label: "Coral" },
                    { link: "/culture_teatro", label: "Teatro" },
                    { link: "/culture_danza", label: "Danza" },
                  ]}
                ></NavMenuItem>
                <NavMenuItem
                  title="Deportes"
                  icon="fa fa-trophy"
                  subitems={[
                    { link: "/sports_balls", label: "Bolas criollas" },
                    { link: "/sports_tenis", label: "Tenis" },
                    { link: "/sports_volley", label: "Volleyball" },
                    { link: "/sports_baseball", label: "Baseball" },
                    { link: "/sports_soccer", label: "Futbol" },
                    { link: "/sports_basquet", label: "Basquet" },
                    { link: "/sports_swiming", label: "Natacion" },
                  ]}
                ></NavMenuItem>
                <NavMenuItem
                  title="Servicios"
                  icon="fa fa-briefcase"
                  subitems={[
                    { link: "/service_restaurant", label: "Restaurant" },
                    { link: "/service_bar_teather", label: "Teatro bar" },
                    { link: "/service_party", label: "Sala de fiestas" },
                    { link: "/service_spa", label: "Spa" },
                    { link: "/service_gym", label: "Gimnasio"},
                    { link: "/service_sauna", label: "Sauna" },
                    { link: "/service_presentations", label: "Salón de reuniones" }
                  ]}
                ></NavMenuItem>
                <NavMenuItem
                  title="Escuelas deportivas"
                  icon="fa fa-futbol-o"
                  subitems={[
                    { link: "/schools_soccer", label: "Escuela Futbol" },
                    { link: "/schools_karate", label: "Escuela Karate" },
                    { link: "/schools_volley", label: "Escuela Volleyball"},
                    { link: "/schools_swimming", label: "Escuela Natacion" },
                    { link: "/schools_baseball", label: "Escuela Beisbol" }
                  ]}
                />
                <NavMenuItem title="Contacto" icon="fa fa-envelope" />
              </MetisMenu>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
