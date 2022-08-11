import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import React from "react";
import img from "../../assets/images/culture/danza.jpg";

export default function DanceCulture() {
  return (
    <PageLayout>
      <Breadcrumb title="Danza" />
      <div className="content-body">
        <div className="container">
          <h2>Agrupación de danza Club Latino</h2>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <img className="schoolImage" src={img} alt="beisbol" />
              <div className="row justify-content-between">
                <div className="col-xl-12">
                  <table className="schoolTable">
                    <thead>
                      <tr>
                        <th>Representante</th>
                        <th>Correo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Lorem ipsun</th>
                        <th>loremipsun@gmail.com</th>
                      </tr>
                      <tr>
                        <th>Profesor lorem ipsun</th>
                        <th>loremipsun@gmail.com</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-xl-12">
                  <table className="schoolTable">
                    <thead>
                      <tr>
                        <th>Categorias</th>
                        <th>Horarios</th>
                        <th>Hora</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Niñas de 5 a 8 años</th>
                        <th>Lunes y Jueves</th>
                        <th>1:00pm 2:00pm</th>
                      </tr>
                      <tr>
                        <th>Niñas de 9 a 12 años</th>
                        <th>Lunes y Jueves</th>
                        <th>3:00pm 4:00pm</th>
                      </tr>
                      <tr>
                        <th>Niñas de 13 en adelante</th>
                        <th>Lunes y Jueves</th>
                        <th>5:00pm 6:00pm</th>
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
