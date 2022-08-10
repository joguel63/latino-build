import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import React from "react";
import img from "../../assets/images/sports/tenis.jpg";

export default function TenisSport() {
  return (
    <PageLayout>
      <Breadcrumb title="Tenis" />
      <div className="content-body">
        <div className="container">
          <h1>Equipo Club Latino</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            reprehenderit quos sapiente facere quod ipsa consectetur, magnam
            temporibus natus repellat est fugit laudantium voluptatum. Non, rem
            quia! Officiis, nisi optio.
          </p>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <img className="schoolImage" src={img} alt="beisbol" />
            </div>
            <div className="col-xl-12">
              <p className="justify-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                eos nesciunt soluta quasi iste perspiciatis repellat quisquam
                impedit sit non, quo atque aspernatur aliquid veritatis facilis
                explicabo, ut accusamus ratione Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Hic cumque, sit quisquam velit
                ipsum quas voluptatum reiciendis molestiae illum assumenda
                pariatur aliquam temporibus iusto nesciunt laborum dignissimos
                repellat. Fugit, consequatur.
              </p>
            </div>
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
                    <td>Lorem Ipsun</td>
                    <td>lorem@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-xl-6">
              <table className="schoolTable">
                <thead>
                  <tr>
                    <th>Liga</th>
                    <th>Fecha</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Juego #1</td>
                    <td>12/01/2022</td>
                    <td>5/3</td>
                  </tr>
                  <tr>
                    <td>Juego #2</td>
                    <td>12/01/2022</td>
                    <td>9/6</td>
                  </tr>
                  <tr>
                    <td>Juego #3</td>
                    <td>12/01/2022</td>
                    <td>Por decidirse</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-xl-6">
              <table className="schoolTable">
                <thead>
                  <tr>
                    <th>Equipo 1</th>
                    <th>Equipo 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lorem</td>
                    <td>Ipsun</td>
                  </tr>
                  <tr>
                    <td>Lorem2</td>
                    <td>Ipsun2</td>
                  </tr>
                  <tr>
                    <td>Lorem3</td>
                    <td>Ipsun3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
