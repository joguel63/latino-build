import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import React from "react";
import img from "../../assets/images/culture/coral.jpeg";

export default function CoralCulture() {
  return (
    <PageLayout>
      <Breadcrumb title="Agrupación coral" />
      <div className="content-body">
        <div className="container">
          <h2>Agrupación Coral Club Latino</h2>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <img className="schoolImage" src={img} alt="beisbol" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                repellendus odit corrupti eaque culpa quisquam expedita sit sed
                molestias perferendis! Eum, accusantium tempora vel praesentium
                excepturi quia possimus adipisci sint?
              </p>
              <div className="row justify-content-between">
                <div className="col-xl-12">
                  <table className="schoolTable">
                    <thead>
                      <tr>
                        <th>Encargado</th>
                        <th>Correo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Lorem ipsun</th>
                        <th>loremipsun@gmail.com</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-xl-12">
                  <table className="schoolTable">
                    <thead>
                      <tr>
                        <th>Instructores</th>
                        <th>Horarios</th>
                        <th>Hora</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Lorem ipsun</th>
                        <th>Lunes y Jueves</th>
                        <th>3:00pm 5:00pm</th>
                      </tr>
                      <tr>
                        <th>Lorem ipsun</th>
                        <th>Martes y Viernes</th>
                        <th>3:00pm 5:00pm</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
