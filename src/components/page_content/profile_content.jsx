import React from 'react';
import authorImg from "../../assets/images/peoples/person.png";
import SidebarTwo from "../sidebar_two";
export default function ProfileContent() {
  return (
         <div className="content-body">
          <div className="container">
           <div className="event-modal event-profile">
            <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
              <div className="row">
               <div className="col-xl-8 p-r-0">
                <div className="modal-right">
                 <div className="media personal-profile">
                  <img className="m-r-30 img-fluid" src={authorImg} alt="placeholder" />
                  <div className="media-body">
                   <h3 className="mt-0">Anamika</h3>
                   <p className="denger"><i className="fa fa-map-marker"></i>Location</p>
                   <p className="denger">www.yoursite.com</p>
                   <p>Language : English</p>
                  </div>
                  <button className="btn btn-secondary">EDIT</button>
                 </div>
                 <div className="modal-about-area">
                  <h3>ABOUT</h3>
                  <p>
                   Cras sed orci sodales enim porttitor feugiat et eget mi. Donec lorem dolor, ornare eget magna id, finibus sollicitudin augue. Nunc eleifend ullamcorper enim, eget rhoncus leo malesuada sed. Nam orci
                   metus, volutpat eget est posuere, egestas suscipit nisi. Proin non turpis mollis, fermentum urna in, ornare leo. Nunc sollicitudin eu metus eget posuere.
                  </p>
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-instagram"></i>
                 </div>

                 <div className="modal-tags">
                  <h3>INTEREST</h3>
                  <button className="btn btn-outline-secondary btn-rounded">FOOD</button>
                  <button className="btn btn-outline-secondary btn-rounded">MUSIC</button>
                  <button className="btn btn-outline-secondary btn-rounded">TECHNOLOGY</button>
                  <button className="btn btn-outline-secondary btn-rounded">AWARDS</button>
                 </div>
                 <div className="modal-footer-area">
                  <div className="row justify-content-between">
                   <div className="col-auto">
                    <p><i className="fa fa-check-circle"></i>ACTIVITY</p>
                   </div>
                   <div className="col-auto">
                    <a href="https://www.google.com/">
                     <i className="fa fa-exclamation-triangle"></i>
                    </a>
                    <a href="https://www.google.com/">
                     <i className="fa fa-trash"></i>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div className="col-xl-4 p-l-0">
                  <SidebarTwo/>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
  );
}
