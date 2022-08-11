import PageLayout from "layouts/page_layout";
import React from "react";
import Breadcrumb from "components/breadcrumb";
import img from "../../assets/images/spaces/restaurant.jpg";

export default function ServiceRestaurant() {
  return (
    <PageLayout>
      <Breadcrumb title="Servicio de restaurant" />
      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2>Restaurant Latinos</h2>
            </div>
            <div className="col-xl-6">
            <img className="serviceImage" src={img} alt="gym" />
            </div>
            <div className="col-xl-6 w-100">
              <p className="justify-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                nulla ut reiciendis modi placeat rem expedita reprehenderit,
                ducimus, exercitationem explicabo tempora perspiciatis sequi
                repudiandae iste labore pariatur animi ratione accusantium?
              </p>
              <table className="serviceTable">
                <tbody>
                    <tr>
                        <th>De Lunes a Viernes:</th>
                        <th>8:00 AM a 7:00pm</th>
                    </tr>
                    <tr>
                        <th>Sabados:</th>
                        <th>9:00 AM a 12:00pm</th>
                    </tr>
                    <tr>
                        <th>Domingos y festivos</th>
                        <th>9:00 AM a 12:00pm</th>
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
