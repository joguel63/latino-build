import React from "react";
import memberImg_01 from "../../assets/images/events/event-main3.jpg";

export default function AdministrativePersonalContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-12 text-center">
            <h3>Personal administrativo del Club Latino</h3>
            <img className="" src={memberImg_01} alt="placeholder" />
            <p></p>{/* como mierda pongo un espacio???*/}
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <p>Lorem ipsun</p>
                    <p>Presidente</p>
                  </td>
                  <td>
                    <p>Lorem ipsun</p>
                    <p>VicePresidente</p>
                  </td>
                  <td>
                    <p>Lorem ipsun</p>
                    <p>Secretario</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Lorem ipsun</p>
                    <p>Tesorero</p>
                  </td>
                  <td>
                    <p>Lorem ipsun</p>
                    <p>Vicetesorero</p>
                  </td>
                  <td>
                    <p>Lorem ipsun</p>
                    <p>Secretario</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Lorem ipsun</p>
                    <p>ViceSecretario</p>
                  </td>
                  <td>
                    <p>Lorem ipsun</p>
                    <p>VicePresidente</p>
                  </td>
                  <td>
                    <p>Lorem ipsun</p>
                    <p>Secretario</p>
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
