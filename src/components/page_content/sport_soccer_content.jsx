import React from "react";
import DisiplineCoordinator from "components/widgets/disipline_coordinator";
import DisiplineTeam from "components/widgets/disipline_team";


import deportista from "../../assets/images/sports/bolas_criollas/image-sportman.jpg";
import img from "../../assets/images/sports/soccer.jpg";


export default function SportSoccerContent() {
    return(
        <>
        <div id="Futbol">
            <div className="container-fluid sport-bg-image p-0" style={{backgroundImage: `URL(${img})`}}></div>
                <DisiplineCoordinator name="nombre"/>
                <section className="section-team">
                    <div className="container">
                        <div className="row">
                        <div className="col-12 Equipo mb-3">
                            <h3>Nuestro Equipo:</h3>
                        </div>
                        <DisiplineTeam src={deportista} name="nombre" charge="posicion"/>
                        <DisiplineTeam src={deportista} name="nombre" charge="posicion"/>
                        <DisiplineTeam src={deportista} name="nombre" charge="posicion"/>
                        <DisiplineTeam src={deportista} name="nombre" charge="posicion"/>
                        <DisiplineTeam src={deportista} name="nombre" charge="posicion"/>
                        <DisiplineTeam src={deportista} name="nombre" charge="posicion"/>
                        <DisiplineTeam src={deportista} name="nombre" charge="posicion"/>
                        </div>
                    </div>
                </section>
        </div>
        </>
    );
}