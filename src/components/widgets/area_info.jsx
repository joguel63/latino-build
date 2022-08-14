import React from "react";

export default function AreaInfo({area, description}){
    return (
        <div className="row">
            <div className="col-12">
                <h2 className="mb-4">{area ?? ""}</h2>
                <p className="mb-5">{description ?? ""}</p>
            </div>
        </div>
    );
}
