import React from "react";
import Map from '../Map.js';

export default function ContactContent() {
    return(
        <div className="container-body">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>title</h1>
                    </div>
                    <div className="col-4">
                        <Map
                            googleMapURL = {"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB2Lp8UFU7mA0MrzM_QwFteM-PfMmt6CQw"}
                            containerElement = {<div style={{height: '400px'}}/>}
                            mapElement = {<div style={{height: '100%'}} />}
                            loadingElement = {<p>Cargando</p>}
                        />
                    </div>
                    <div className="col-8">
                        asd
                    </div>
                </div>
            </div>
        </div>
    );
}