import FormContact from "components/form-contact";
import React from "react";
import { Form } from "react-bootstrap";


export default function ContactContent() {
    return(
        <div className="container-body py-5">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        MAP GOOGLE
                    </div>
                    <div className="col-9">
                        <h2 class="pb-4">Enviar Correo Electronico</h2>
                        <FormContact></FormContact>
                    </div>
                </div>
            </div>
        </div>
    );
}