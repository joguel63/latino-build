import React from 'react';
import { Row, Col, Tab, Nav } from "react-bootstrap";
import authorImg from "../assets/images/peoples/person.png";
export default function SidebarTwo() {
  return (
   <div className="modal-left">
    <Tab.Container defaultActiveKey="event_created">
          <Nav>
           <Nav.Item>
            <Nav.Link eventKey="event_attend">Event Attend</Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link eventKey="event_created">Event Created</Nav.Link>
           </Nav.Item>
          </Nav>
     <Tab.Content>
          
      <Tab.Pane eventKey="event_created">
           <div className="tab-wrapper"> 
            <div className="media">
             <img className="m-r-15 img-fluid" src={authorImg} alt="hasan" />
             <div className="media-body">
              <h3 className="mt-0">Hasan Khan</h3>
              <p><i className="fa fa-map-marker"></i>Location</p>
              <span>22 June 2018</span>
             </div>
            </div>
            <div className="media">
             <img className="m-r-15 img-fluid" src={authorImg} alt="event 2" />
             <div className="media-body">
              <h3 className="mt-0">Anamika</h3>
              <p><i className="fa fa-map-marker"></i>Location</p>
              <span>22 June 2018</span>
             </div>
            </div>
            <div className="media">
         <img className="m-r-15 img-fluid" src={authorImg} alt="event 3" />
             <div className="media-body">
              <h3 className="mt-0">Anamika</h3>
              <p><i className="fa fa-map-marker"></i>Location</p>
              <span>22 June 2018</span>
             </div>
            </div>
            <div className="media">
         <img className="m-r-15 img-fluid" src={authorImg} alt="event 4" />
             <div className="media-body">
              <h3 className="mt-0">Anamika</h3>
              <p><i className="fa fa-map-marker"></i>Location</p>
              <span>22 June 2018</span>
             </div>
            </div>
            <div className="media">
         <img className="m-r-15 img-fluid" src={authorImg} alt="event 5" />
             <div className="media-body">
              <h3 className="mt-0">Anamika</h3>
              <p><i className="fa fa-map-marker"></i>Location</p>
              <span>22 June 2018</span>
             </div>
            </div>
       </div>
          
      </Tab.Pane>
      <Tab.Pane eventKey="event_attend">  
           <div className="tab-wrapper"> 
            <div className="media">
         <img className="m-r-15 img-fluid" src={authorImg} alt="event 6" />
             <div className="media-body">
              <h3 className="mt-0">Jahid</h3>
              <p><i className="fa fa-map-marker"></i>Location</p>
              <span>22 June 2020</span>
             </div>
            </div>
            <div className="media">
         <img className="m-r-15 img-fluid" src={authorImg} alt="event 7" />
             <div className="media-body">
              <h3 className="mt-0">Jahinger Alam</h3>
              <p><i className="fa fa-map-marker"></i>Location</p>
              <span>22 June 2021</span>
             </div>
            </div>
            <div className="media">
         <img className="m-r-15 img-fluid" src={authorImg} alt="event 8" />
             <div className="media-body">
              <h3 className="mt-0">Anamika</h3>
              <p><i className="fa fa-map-marker"></i>Location</p>
              <span>22 June 2018</span>
             </div>
            </div>
          </div>
      </Tab.Pane>
     </Tab.Content>
     </Tab.Container>
   </div>
  );
}
