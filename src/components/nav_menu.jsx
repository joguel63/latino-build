import React, {useState, useEffect} from 'react';
import MetisMenu from '@metismenu/react';
import 'metismenujs/dist/metismenujs.css';
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  const [tabletView,setTabletView] = useState(false);
  const controlMenu = () =>{
    if(window.innerWidth < 992){
      setTabletView(true);
    }else {
      setTabletView(false);
    }
    window.addEventListener("resize", controlMenu);
  }
  useEffect(()=>{
    controlMenu();
  }, [tabletView]);

  const showMenu = props.showMenu;
  const navClass = showMenu ? "tablet-menu show" : "tablet-menu";
  return (
    <div className={tabletView ? `${navClass}` : "menu"}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <nav className="topbar-nav">
              <MetisMenu className="metismenu" id="metismenu" toggle={true}>
                <li>
                  <Link to="/">
                    <span className="fa fa-home"></span> HOME
                 </Link>
                </li>
                <li>
                  <a className="has-arrow" href="#">
                    <span className="fa fa-calendar-check-o"></span> Events
                  </a>
                  <ul>
                    <li>
                      <Link to="/active_events">All Events</Link>
                    </li>
                    <li>
                      <Link to="/draft_events">Draft Events</Link>
                    </li>
                    <li>
                      <Link to="/my_events">My Events</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/members">
                    <span className="fa fa-users"></span>
                   Members
                 </Link>
                </li>
                <li>
                  <a className="has-arrow" href="#">
                    <span className="fa fa-envelope"></span> Messages
                 </a>
                  <ul aria-expanded="false">
                    <li>
                      <Link to="/message">Inbox</Link>
                    </li>
                    <li>
                      <Link to="/chat">Chat</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/calendar">
                    <span className="fa fa-calendar"></span> Calender
                  </Link>
                </li>
                <li>
                  <a className="has-arrow" href="#" aria-expanded="false">
                    <span className="fa fa-cog"></span> Settings
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/payment">Payment</Link>
                    </li>
                    <li>
                      <Link to="/notification">Notification</Link>
                    </li>
                    <li>
                      <Link to="/personal">Personal</Link>
                    </li>
                  </ul>
                </li>
              </MetisMenu>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
