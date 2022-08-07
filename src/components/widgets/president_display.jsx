import React from "react";

export default function PresidentDisplay({src,name,date}){
    return (
        <div className="col-12 col-md-6 col-lg-3">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={src} alt="placeholder" />
            <h4>{name}</h4>
            <p><b>{date.from}</b>-<b>{date.to}</b></p>
           </div>
          </div>
    );
}