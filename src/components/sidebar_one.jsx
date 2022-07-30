import React from 'react';
import imgOne from "../assets/images/events/tp-spncr.png";
import imgTwo from "../assets/images/events/tp-spncr2.png";
import imgThree from "../assets/images/events/tp-spncr3.png";
import imgFour from "../assets/images/events/tp-spncr4.png";

export default function SidebarOne() {
  return (
    <div className="event-sideber m-l-15">
      <h4>TOP SPONSORS</h4>
      <div className="event-sideber-img">
        <a href="#">
          <img className="img-fluid" src={imgOne} alt="placeholder image" />
        </a>
        <a href="#">
          <img className="img-fluid" src={imgTwo} alt="placeholder image" />
        </a>
        <a href="#">
          <img className="img-fluid" src={imgThree} alt="placeholder image" />
        </a>
        <a href="#">
          <img className="img-fluid" src={imgFour} alt="placeholder image" />
        </a>
      </div>
      <div className="event-sideber-category">
        <h4>CATEGORIES</h4>
        <ul>
          <li>
            <a href="#">All Categories</a>
          </li>
          <li>
            <a href="#">Art</a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">Food</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Films</a>
          </li>
          <li>
            <a href="#">Awards</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Parties</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Science</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Comendy</a>
          </li>
          <li>
            <a href="#">Show</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
