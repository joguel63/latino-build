import React from "react";
// import SidebarOne from "../sidebar_one";
// import Breadcrumb from "../breadcrumb";
import piscina from "../../assets/images/spaces/piscina.jpg";
import spa from "../../assets/images/spaces/spa.jpg";
import futbol from "../../assets/images/spaces/futbol-sala.png";
import tenis from "../../assets/images/spaces/cancha-tenis.jpg";
import gym from "../../assets/images/spaces/gym.png";
import bohio from "../../assets/images/spaces/bohio.jpg";
import bar from "../../assets/images/spaces/bar.jpg";
import estacionamiento from "../../assets/images/spaces/estacionamiento.jpg";
import bolas from "../../assets/images/spaces/bolas-criollas.jpg";
import conferencias from "../../assets/images/spaces/conferencias.jpg";
import karate from "../../assets/images/spaces/karate.jpg";
import parque from "../../assets/images/spaces/parque.jpg";
import restaurant from "../../assets/images/spaces/restaurant.jpg";
import salon from "../../assets/images/spaces/salon-de-fiesta.webp";
import softbol from "../../assets/images/spaces/softbol.jpg";
import teatro from "../../assets/images/spaces/teatro.jpg";
import SpaceImg from "components/widgets/spaces_img";

export default function SpacesContent() {
  const description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nemo vel assumenda repudiandae similique incidunt qui aliquid opti"

  return (
    <>
      <div className="content-body">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-12">
              <div className="peoples-photo text-center">
                <div className="row justify-content-center">
                  <SpaceImg src={piscina} title="Piscina" description={description}/>
                  <SpaceImg src={futbol} title="Cancha de futbol" description={description}/>
                  <SpaceImg src={tenis} title="Cancha de tenis" description={description}/>
                  <SpaceImg src={bohio} title="Bohios Moderno" description={description}/>
                  <SpaceImg src={spa} title="Spa" description={description}/>
                  <SpaceImg src={gym} title="Gymnasio" description={description}/>
                  <SpaceImg src={restaurant} title="Restaurant" description={description}/>
                  <SpaceImg src={salon} title="Salon de Fiestas" description={description}/>
                  <SpaceImg src={bar} title="Bar" description={description}/>
                  <SpaceImg src={softbol} title="Cancha de Softbol" description={description}/>
                  <SpaceImg src={bolas} title="Cancha de Bolas Criollas" description={description}/>
                  <SpaceImg src={karate} title="Salon Karate" description={description}/>
                  <SpaceImg src={estacionamiento} title="Estacionamiento"description={description}/>
                  <SpaceImg src={parque} title="Parque Infantil"description={description}/>
                  <SpaceImg src={teatro} title="Salon de fiestas con tarima"description={description}/>
                  <SpaceImg src={conferencias} title="Salon de conferencias"description={description}/>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 left-line">
        <SidebarOne />
       </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
