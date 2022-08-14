import React from "react";

export default function PersonalInf({name, charge}){
    return (
        <div className="col-12 col-sm-6 col-lg-4 py-3">
            <h5>{name ?? ""}</h5>
            <p>{charge ?? ""}</p>
        </div>
    );
}