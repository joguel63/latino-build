import React from "react";
import memberImg_01 from "../../assets/images/events/event-main3.jpg";

export default function DirectionBoardContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-12 text-center">
            <h3 className="mt-4 mb-5">Junta directiva del Centro Latino</h3>
            <p className="justify-content mb-5">
              La dirección, representación y administración de la Asociación Civil Centro Latino estará a cargo de una Junta Directiva integrada por siete (7) miembros, así: un (1) Presidente, un (1) Vicepresidente, un (1) Director de Finanzas, un (1) Secretario, un (1) Director de Deportes y Recreación, un (1) Director de Cultura y Educación y un (1) Vocal, los cuales serán electos conforme a lo dispuesto en estos Estatutos y en el Reglamente de elecciones.
            </p>
            <img className="mb-5" src={memberImg_01} alt="placeholder" />
            <p></p>{/* como mierda pongo un espacio??? -> class mt-4(margin-top) pa'*/}
            <table className="table mt-4">
              <tbody>
                <tr>
                  <td>
                    <p>Sr. JOSE RAMIREZ</p>
                    <p>Presidente</p>
                  </td>
                  <td>
                    <p>Ing. LICINIO RODRIGUEZ</p>
                    <p>VicePresidente</p>
                  </td>
                  <td>
                    <p>Ing. ARLENYS VARELA</p>
                    <p>Secretario</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Lcdo. ADMER CHACÓN</p>
                    <p>Director de Finanzas</p>
                  </td>
                  <td>
                    <p>Lcdo. HUGO HERNÁNDEZ</p>
                    <p>Director de Deportes y Recreación</p>
                  </td>
                  <td>
                    <p>Prof. CELSA OLEJUA</p>
                    <p>Director de Cultura y Educación</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Sr. JOSE MOLINA</p>
                    <p>Vocal</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
