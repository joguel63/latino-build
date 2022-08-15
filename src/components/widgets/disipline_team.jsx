import React from "react"
import deportista from "../../assets/images/sports/bolas_criollas/image-sportman.jpg";


export default function DisiplineTeam({headshot, name, charge}){
    return(
        <div className="col-12 col-sm-6 col-md-3 text-center">
        <img src={deportista} className="mb-3" alt="" />
        <h5>{name}</h5>
        <p>{charge}</p>
        </div>
    );
}

