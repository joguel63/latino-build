import React from 'react';
import SidebarOne from "../sidebar_one";
import Breadcrumb from "../breadcrumb";
import memberImg_01 from "../../assets/images/peoples/person.png";
export default function MembersContent() {
  return (
    <>
    <div className="content-body">
     <div className="container">
      <div className="row justify-content-between">
       <div className="col-xl-8">
        <div className="peoples-photo text-center">
         <div className="row justify-content-center">
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Anamika</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Ashan</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Anu</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Amar</h4>
           </div>
          </div>

          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Ann William</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Ahaan</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Ak Jack</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Aman Candy</h4>
           </div>
          </div>

          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Akash</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Ankur</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Andy</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Arsh</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Ashani</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Akash</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} alt="placeholder image" />
            <h4>Andy Doe</h4>
           </div>
          </div>
          <div className="col-auto">
           <div className="peoples-photo-single">
            <img className="img-fluid" src={memberImg_01} />
            <h4>Aunoop</h4>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div className="col-xl-3 left-line">
        <SidebarOne />
       </div>
      </div>
     </div>
    </div>
    </>
  );
}
