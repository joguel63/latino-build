import PresidentDisplay from 'components/widgets/president_display';
import React from 'react';
// import Breadcrumb from "../breadcrumb";
import memberImg_01 from "../../assets/images/peoples/person.png";
export default function PresidentsContent() {
  return (
    <div className="content-body">
     <div className="container">
      <div className="row justify-content-between">
       <div className="col-xl-12">
        <div className="peoples-photo text-center">
         <div className="row justify-content-center">
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
          <PresidentDisplay src={memberImg_01} name="Presidente" date={{from:"1992",to:"1996"}}/>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
  );
}
