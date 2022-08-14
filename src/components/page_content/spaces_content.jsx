import React from 'react';
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

export default function SpacesContent() {
  return (
    <>
    <div className="content-body">
     <div className="container">
      <div className="row justify-content-between">
       <div className="col-xl-12">
        <div className="peoples-photo text-center">
         <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={piscina} alt="Piscina" />
            <h4>Piscina</h4>
           </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={futbol} alt="Cancha de Futbol Sala" />
            <h4>Cancha de futbol</h4>
           </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={tenis} alt="Cancha de Tenis" />
            <h4>Cancha de tenis</h4>
           </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={bohio} alt="Bohios" />
            <h4>Bohios Moderno</h4>
           </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={spa} alt="Spa" />
            <h4>Spa</h4>
           </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={gym} alt="Gimnasio Centro Latino" />
            <h4>Gymnacio</h4>
           </div>
          </div>


          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={restaurant} alt="Restaurant" />
            <h4>Restaurant</h4>
           </div>
          </div>

          
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={salon} alt="Salon de Fiestas" />
            <h4>Salon de Fiestas</h4>
           </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={bar} alt="Bar" />
            <h4>Bar</h4>
           </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={softbol} alt="Cancha de Softbol" />
            <h4>Cancha de Softbol</h4>
           </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={bolas} alt="Cancha de Bolas Criollas" />
            <h4>Cancha de Bolas Criollas</h4>
           </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={karate} alt="Salon de Karate" />
            <h4>Salon Karate</h4>
           </div>
          </div>

          
          
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={estacionamiento} alt="Estacionamiento" />
            <h4>Estacionamiento</h4>
           </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={parque} alt="Parque Infantil" />
            <h4>Parque Infantil</h4>
           </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={teatro} alt="Salon de Fiestas con Tarima" />
            <h4>Salon de Fiestas con Tarima</h4>
           </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid spaces-image" src={conferencias} alt="Salon de Conferencias" />
            <h4>Salon de conferencias</h4>
           </div>
          </div>

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
