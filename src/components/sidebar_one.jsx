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
        <a href="https://www.google.com/">
          <img className="img-fluid" src={imgOne} alt="placeholder" />
        </a>
        <a href="https://www.google.com/">
          <img className="img-fluid" src={imgTwo} alt="placeholder" />
        </a>
        <a href="https://www.google.com/">
          <img className="img-fluid" src={imgThree} alt="placeholder" />
        </a>
        <a href="https://www.google.com/">
          <img className="img-fluid" src={imgFour} alt="placeholder" />
        </a>
      </div>
      <div className="event-sideber-category">
        <h4>CATEGORIES</h4>
        <ul>
          <li>
            <a href="https://www.google.com/">All Categories</a>
          </li>
          <li>
            <a href="https://www.google.com/">Art</a>
          </li>
          <li>
            <a href="https://www.google.com/">Books</a>
          </li>
          <li>
            <a href="https://www.google.com/">Food</a>
          </li>
          <li>
            <a href="https://www.google.com/">Sports</a>
          </li>
          <li>
            <a href="https://www.google.com/">Films</a>
          </li>
          <li>
            <a href="https://www.google.com/">Awards</a>
          </li>
          <li>
            <a href="https://www.google.com/">Men</a>
          </li>
          <li>
            <a href="https://www.google.com/">Parties</a>
          </li>
          <li>
            <a href="https://www.google.com/">Technology</a>
          </li>
          <li>
            <a href="https://www.google.com/">Science</a>
          </li>
          <li>
            <a href="https://www.google.com/">Women</a>
          </li>
          <li>
            <a href="https://www.google.com/">Music</a>
          </li>
          <li>
            <a href="https://www.google.com/">Comendy</a>
          </li>
          <li>
            <a href="https://www.google.com/">Show</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
