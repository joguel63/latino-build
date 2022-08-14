import React from "react"
import deportista from "../../assets/images/sports/bolas_criollas/image-sportman.jpg";


export default function DisiplineCoordinator({name}){
    return(
        <section className="section-coordinador my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                    <h3>Representante:</h3>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                    <img src={deportista} className="mb-4" alt="Fotografia Coordinador" />
                    <h3>{name ?? ""}</h3>
                    <p>Coordinador</p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-5 info-representante">
                    <h4 className="mb-4">Contacto:</h4>
                    <p><span>e-mail: </span>email@email.com</p>
                    <p><span>Practicas: </span>Lunes - Martes - Viernes (2pm - 5pm)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
