import React from "react";
import memberImg_01 from "../../assets/images/events/event-main3.jpg";

export default function DirectionBoardContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-12 text-center">
            <h3>Junta directiva del CL</h3>
            <p className="justify-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique incidunt recusandae harum consequatur perspiciatis
              repellendus maiores aliquam, atque dolorem fugit quis, possimus
              magni sint rerum! Nobis laboriosam officia ea deleniti? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Similique
              incidunt recusandae harum consequatur perspiciatis repellendus
              maiores aliquam, atque dolorem fugit quis, possimus magni sint
              rerum! Nobis laboriosam officia ea deleniti?
            </p>
            <img className="" src={memberImg_01} alt="placeholder" />
            <p></p>{/* como mierda pongo un espacio???*/}
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <p>Arlenys Varela Niño</p>
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
