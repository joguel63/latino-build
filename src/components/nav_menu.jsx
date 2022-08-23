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
  useEffect(() => {
    controlMenu();
  }, [tabletView]);

  const showMenu = props.showMenu;
  const navClass = showMenu ? "tablet-menu show" : "tablet-menu";
  console.log(navClass, showMenu);
  return (
    <div className={tabletView ? `${navClass}` : "menu"}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <nav className="topbar-nav">
              <MetisMenu className="metismenu" id="metismenu" toggle={true}>
                <NavMenuItem title="Inicio" route="/" />
                <NavMenuItem title="Blog" route="/blog" />
                <NavMenuItem
                  title="Nosotros"
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
                />
                <NavMenuItem title="Instalaciones" route="/spaces" />
                <NavMenuItem
                  title="Cultura"
                  subitems={[
                    { link: "/culture_coral", label: "Coral" },
                    { link: "/culture_teather", label: "Teatro" },
                    { link: "/culture_dance", label: "Danza" },
                  ]}
                />
                <NavMenuItem
                  title="Deportes"
                  subitems={[
                    { link: "/sports_balls", label: "Bolas criollas" },
                    { link: "/sports_tenis", label: "Tenis" },
                    { link: "/sports_volleyball", label: "Volleyball" },
                    { link: "/sports_baseball", label: "Beisbol" },
                    { link: "/sports_soccer", label: "Futbol" },
                    { link: "/sports_basquet", label: "Basquet" },
                    { link: "/sports_swimming", label: "Natacion" },
                  ]}
                />
                <NavMenuItem
                  title="Servicios"
                  subitems={[
                    { link: "/service_restaurant", label: "Restaurant" },
                    { link: "/service_bar_teather", label: "Teatro bar" },
                    { link: "/service_party", label: "Sala de fiestas" },
                    { link: "/service_spa", label: "Spa" },
                    { link: "/service_gym", label: "Gimnasio" },
                    { link: "/service_sauna", label: "Sauna" },
                    {
                      link: "/service_presentations",
                      label: "Salón de reuniones",
                    },
                  ]}
                />
                <NavMenuItem
                  title="Escuelas deportivas"
                  subitems={[
                    { link: "/school_soccer", label: "Escuela Futbol" },
                    { link: "/school_karate", label: "Escuela Karate" },
                    { link: "/school_volley", label: "Escuela Volleyball" },
                    { link: "/school_swimming", label: "Escuela Natacion" },
                    { link: "/school_baseball", label: "Escuela Beisbol" },
                  ]}
                />
                <NavMenuItem title="Contacto" route="/contact" />
              </MetisMenu>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
