import React from "react";
import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
// import img from "../../assets/images/sports/balls.jpg";
// import deportista from "../../assets/images/sports/bolas_criollas/image-sportman.jpg";
import SportBallsContent from "components/page_content/sport_balls_content";

export default function BallsSport() {
  return (
    <PageLayout>
      <Breadcrumb title="Bolas Criollas"/>
      <SportBallsContent/>
    </PageLayout>
    // <PageLayout>
    //   <Breadcrumb title="Bolas criollas" />
    //   <div className="content-body">
    //     <div className="container-fluid sport-bg-image p-0" style={{backgroundImage: `URL(${img})`}}></div>
        
    //     <SportCoordinator />

    //     <section className="section-coordinador my-5">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-12 mb-3">
    //             <h3>Representante:</h3>
    //           </div>
    //           <div className="col-12 col-md-6 text-center">
    //             <img src={deportista} className="mb-4" alt="Fotografia Coordinador" />
    //             <h3>Nombre Coordinador</h3>
    //             <p>Coordinador</p>
    //           </div>
    //           <div className="col-12 offset-md-1 col-md-5 info-representante">
    //             <h4 className="mb-4">Contacto:</h4>
    //             <p><span>e-mail: </span>email@email.com</p>
    //             <p><span>Practicas: </span>Lunes - Martes - Viernes (2pm - 5pm)</p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="section-team">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-12 Equipo mb-3">
    //             <h3>Nuestro Equipo:</h3>
    //           </div>
    //           <div className="col-12 col-sm-6 col-md-3 text-center">
    //             <img src={deportista} className="mb-3" alt="" />
    //             <h5>Nombre</h5>
    //             <p>Posicion</p>
    //           </div>
    //           <div className="col-12 col-sm-6 col-md-3 text-center">
    //             <img src={deportista} className="mb-3" alt="" />
    //             <h5>Nombre</h5>
    //             <p>Posicion</p>
    //           </div>
    //           <div className="col-12 col-sm-6 col-md-3 text-center">
    //             <img src={deportista} className="mb-3" alt="" />
    //             <h5>Nombre</h5>
    //             <p>Posicion</p>
    //           </div>
    //           <div className="col-12 col-sm-6 col-md-3 text-center">
    //             <img src={deportista} className="mb-3" alt="" />
    //             <h5>Nombre</h5>
    //             <p>Posicion</p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </PageLayout>
  );
}
