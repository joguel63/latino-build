import React from "react";
import AreaInfo from "components/widgets/area_info";
import PersonalCharge from "components/widgets/personal_charge";
import memberImg_01 from "../../assets/images/events/event-main3.jpg";

export default function AdministrativePersonalContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-12 text-center">
            <h2 className="mt-4 mb-5">Personal administrativo del Club Latino</h2>
            <img className="mb-5" src={memberImg_01} alt="placeholder" />
            <section className="section-personal">
              <AreaInfo area="Consejo Disiplinario" description="
                La Asociación tendrá un Consejo Disciplinario, organismo autónomo encargado de conocer y decidir sobre las faltas de los socios, de sus familiares e invitados conforme lo establecen los presentes Estatutos y los Reglamentos. Estará integrado por cinco (5) miembros de los cuales por lo menos uno (1) debe ser profesional del derecho. El Consejo Disciplinario designará de su seno un Presidente y un Secretario, así como de no tener entre sus integrantes un profesional del derecho, deberá solicitar para sus decisiones la asistencia jurídica necesaria que avale dicha decisión.
              "/>
              <div className="row personal-content d-flex justify-content-center">
                <PersonalCharge name="Nombre" charge="Presidente"/>
                <PersonalCharge name="Nombre" charge="Secretario"/>
                <PersonalCharge name="Nombre" charge="Miembro 3"/>
                <PersonalCharge name="Nombre" charge="Miembro 4"/>
                <PersonalCharge name="Nombre" charge="Miembro 5"/>
              </div>
            </section>
            <section className="section-personal">
              <AreaInfo area="Consejo de Honor" description="
                La Asociación tendrá un Consejo de Honor encargado de conocer y decidir con carácter inapelable sobre las solicitudes de reconsideración y apelación que por escrito que hicieren los socios sancionados por el Consejo Disciplinario. El Consejo de Honor estará integrado por siete (7) miembros electos uninominalmente.
              "/>
              <div className="row personal-content d-flex justify-content-center">
                <PersonalCharge name="Nombre" charge="Miembro 1"/>
                <PersonalCharge name="Nombre" charge="Miembro 2"/>
                <PersonalCharge name="Nombre" charge="Miembro 3"/>
                <PersonalCharge name="Nombre" charge="Miembro 4"/>
                <PersonalCharge name="Nombre" charge="Miembro 5"/>
                <PersonalCharge name="Nombre" charge="Miembro 6"/>
                <PersonalCharge name="Nombre" charge="Miembro 7"/>
              </div>
            </section>
            <section className="section-personal">
              <AreaInfo area="Comisarios" description="
                La Asociación tendrá un Comisario principal y un Comisario suplente, elegidos conforme lo establece el capítulo VII de los presentes Estatutos y el Reglamento de elecciones.
              "/>
              <div className="row personal-content d-flex justify-content-center">
                <PersonalCharge name="Nombre" charge="Comisario Principal"/>
                <PersonalCharge name="Nombre" charge="Comisario Suplente"/>
              </div>
            </section>
            <section className="section-personal">
              <AreaInfo area="Comisión Electoral" description="
                La dirección de los procesos de elecciones por listas o planchas estarán a cargo de una Comisión Electoral integrada por tres (3) miembros principales y tres (3) suplentes.
              "/>
              <div className="row personal-content d-flex justify-content-center">
                <PersonalCharge name="Nombre" charge="Presidente"/>
                <PersonalCharge name="Nombre" charge="Secretario"/>
                <PersonalCharge name="Nombre" charge="Vocal"/>
                <PersonalCharge name="Nombre" charge="Presidente Suplente"/>
                <PersonalCharge name="Nombre" charge="Secretario Suplente"/>
                <PersonalCharge name="Nombre" charge="Vocal Suplente"/>
              </div>
            </section>
            <section className="section-personal">
              <AreaInfo area="Comité de Damas" description="
                El Comité de Damas del Centro Latino, tiene como tarea apoyar el trabajo social, cultural, deportivo de la Junta Directiva y organizar actividades en pro de los beneficios del socio y su grupo familiar.
              "/>
              <div className="row personal-content d-flex justify-content-center">
                <PersonalCharge name="Sra. Nelly Milla de Ramírez" charge="Dama de Honor"/>
                <PersonalCharge name="Sra. Ligia Niño de Varela" charge="Dama de Honor"/>
                <PersonalCharge name="Abg. Sul Molina de Chacón" charge="Dama de Honor"/>
                <PersonalCharge name="Lcda. Maury Rudas de Hernández" charge="Dama de Honor"/>
                <PersonalCharge name="Sra. María González de Molina" charge="Dama de Honor"/>
                <PersonalCharge name="Sra. Blanca Acevedo de Calderón" charge="Dama de Honor"/>
                <PersonalCharge name="Lcda. Mary Sánchez de Rincón" charge="Dama de Honor"/>
                <PersonalCharge name="Sra. Eugenia Delgado" charge="Dama de Honor"/>
              </div>
              <div className=" mt-4 row personal-content info d-flex justify-content-center">
                <PersonalCharge name="comitededamas.centrolatino@gmail.com" charge="e-mail"/>
              </div>
            </section><section className="section-personal">
              <AreaInfo area="Personal Administrativo"/>
              <img className="mb-5" src={memberImg_01} alt="placeholder" />
              <div className=" mt-4 row personal-content d-flex justify-content-center">
                <PersonalCharge name="name" charge="administrador"/>
                <PersonalCharge name="name" charge="contador"/>
                <PersonalCharge name="name" charge="Asistente Contable"/>
                <PersonalCharge name="name" charge="Secretario"/>
                <PersonalCharge name="name" charge="Cajero"/>
                <PersonalCharge name="name" charge="Auxiliar de Caja"/>
                <PersonalCharge name="name" charge="Supervisor"/>
                <PersonalCharge name="name" charge="Mantenimiento"/>
                <PersonalCharge name="name" charge="Seguridad"/>
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
