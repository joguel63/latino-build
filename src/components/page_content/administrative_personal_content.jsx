import React from "react";
import PersonalInf from "components/widgets/personal";
import memberImg_01 from "../../assets/images/events/event-main3.jpg";

export default function AdministrativePersonalContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-12 text-center">
            <h3>Personal administrativo del Club Latino</h3>
            <img className="mb-5" src={memberImg_01} alt="placeholder" />
            <p></p>{/* como mierda pongo un espacio??? mt-4 pa'*/}
            <section className="section-personal">
              <div className="row">
                <div className="col-12">
                  <h2 className="mb-4">consejo disiplinario</h2>
                  <p className="mb-5">La Asociación tendrá un Consejo Disciplinario, organismo autónomo encargado de conocer y decidir sobre las faltas de los socios, de sus familiares e invitados conforme lo establecen los presentes Estatutos y los Reglamentos. Estará integrado por cinco (5) miembros de los cuales por lo menos uno (1) debe ser profesional del derecho. El Consejo Disciplinario designará de su seno un Presidente y un Secretario, así como de no tener entre sus integrantes un profesional del derecho, deberá solicitar para sus decisiones la asistencia jurídica necesaria que avale dicha decisión.</p>
                </div>
              </div>
              <div className="row personal-content d-flex justify-content-center">
                <PersonalInf name="Nombre" charge="Presidente"/>
                <PersonalInf name="Nombre" charge="Secretario"/>
                <PersonalInf name="Nombre" charge="Miembro 3"/>
                <PersonalInf name="Nombre" charge="Miembro 4"/>
                <PersonalInf name="Nombre" charge="Vocal"/>
                <PersonalInf name="Nombre" charge="Presidente Suplente"/>
                <PersonalInf name="Nombre" charge="Secretario Suplente"/>
                <PersonalInf name="Nombre" charge="Vocal Suplente"/>
              </div>
            </section>
            <section className="section-personal">
              <div className="row">
                <div className="col-12">
                  <h2 className="mb-4">consejo disiplinario</h2>
                  <p className="mb-5">La Asociación tendrá un Consejo Disciplinario, organismo autónomo encargado de conocer y decidir sobre las faltas de los socios, de sus familiares e invitados conforme lo establecen los presentes Estatutos y los Reglamentos. Estará integrado por cinco (5) miembros de los cuales por lo menos uno (1) debe ser profesional del derecho. El Consejo Disciplinario designará de su seno un Presidente y un Secretario, así como de no tener entre sus integrantes un profesional del derecho, deberá solicitar para sus decisiones la asistencia jurídica necesaria que avale dicha decisión.</p>
                </div>
              </div>
              <div className="row personal-content d-flex justify-content-center">
                <PersonalInf name="Nombre" charge="Presidente"/>
                <PersonalInf name="Nombre" charge="Secretario"/>
                <PersonalInf name="Nombre" charge="Miembro 3"/>
                <PersonalInf name="Nombre" charge="Miembro 4"/>
                <PersonalInf name="Nombre" charge="Vocal"/>
                <PersonalInf name="Nombre" charge="Presidente Suplente"/>
                <PersonalInf name="Nombre" charge="Secretario Suplente"/>
                <PersonalInf name="Nombre" charge="Vocal Suplente"/>
              </div>
            </section>
            {/* <table className="table">
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
            </table> */}
          </div>
        </div>
      </div>
    </div>
  );
}
