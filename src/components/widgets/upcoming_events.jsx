import React from 'react';
import userImg from "../../assets/images/thumb/1.png";

export default function UpcomingEvents() {
  return (
   <div className="card">
    <div className="card-body">
     <h4 className="card-title m-b-15">UPCOMING EVENTS</h4>
     <div className="upcoming-events">
      <div className="table-responsive">
       <table className="table">
        <tbody>
         <tr>
          <td><img src={userImg} alt="user" /></td>
          <td>
           Event Name
              <a href="https://www.google.com/"><i className="icofont icofont-social-google-map"></i> Location</a>
          </td>
         </tr>
         <tr>
          <td><img src={userImg} alt="user" /></td>
          <td>
           Event Name
             <a href="https://www.google.com/"><i className="icofont icofont-social-google-map"></i> Location</a>
          </td>
         </tr>
         <tr>
          <td><img src={userImg} alt="user" /></td>
          <td>
           Event Name
              <a href="https://www.google.com/"><i className="icofont icofont-social-google-map"></i> Location</a>
          </td>
         </tr>
         <tr>
          <td><img src={userImg} alt="user" /></td>
          <td>
           Event Name
              <a href="https://www.google.com/"><i className="icofont icofont-social-google-map"></i> Location</a>
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
