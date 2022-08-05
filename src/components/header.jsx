import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import useToggle from "../hooks/use_toggle";
import logoImg from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AppContext } from "core/contexts";
import { LoginButton, UserDropdown } from "components/header-components";

export default function Header(props) {
  const { isLoged } = useContext(AppContext);
  const [show, handleClose] = useToggle();

  return (
    <div className="header py-4">
      <div className="container">
        <div className="row align-items-center header-container">
          <div>
            <div className="logo">
              <Link to="/">
                <img className="logo" src={logoImg} alt="logo" />
              </Link>
            </div>
            <button className="nav-control" onClick={props.controlMenu}>
              {props.showMenu ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>

          <div>
            <div className="header-user-profile">
              {isLoged ? <UserDropdown /> : <LoginButton />}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className="creat-event">
        <Modal.Header closeButton>
          <h2>CREATE EVENT</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-xl-7">
              <div className="row">
                <div className="col-md-12">
                  <label className="m-t-20">TITLE</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Music Awards"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="m-t-20" htmlFor="desc_field">
                    DESCRIPTION
                  </label>
                  <textarea
                    className="form-control"
                    id="desc_field"
                    placeholder="In eu urna enim. Cras hendrerit ullamcorper malesuada. In justo lacus, pharetra nec imperdiet sed, congue at metus. Mauris eleifend nec neque in pretium. Nulla eleifend, enim ultrices ultrices ullamcorper."
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label className="m-t-20" htmlFor="date_day">
                    DAY
                  </label>
                  <div className="input-group clockpicker">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="15 June 2020"
                      id="date_day"
                      required
                    />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-clock-o"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="m-t-20" htmlFor="date_houre">
                    HOUR
                  </label>
                  <div className="input-group clockpicker">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="10 am"
                      id="date_houre"
                      required
                    />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-clock-o"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="m-t-20" htmlFor="date_minutes">
                    MINUTE
                  </label>
                  <div className="input-group clockpicker">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="15 m"
                      id="date_minutes"
                      required
                    />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-clock-o"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="m-t-20" htmlFor="time_duration">
                    DURATION
                  </label>
                  <div className="input-group clockpicker">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="2 h 45 m"
                      id="time_duration"
                    />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-clock-o"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="m-t-20" htmlFor="user_location">
                    LOCATION
                  </label>
                  <div className="input-group clockpicker">
                    <input
                      type="text"
                      className="form-control b-r-0"
                      placeholder="New York City"
                      id="user_location"
                    />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-crosshairs"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <label className="m-t-20">ADD SPONSORS</label>
              <form className="search-area" action="#" method="post">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Location"
                />
                <i className="fa fa-search"></i>
              </form>
              <div className="row">
                <div className="col-md-12">
                  <label className="m-t-20" htmlFor="add_guest">
                    ADD GUEST
                  </label>
                  <div className="input-group clockpicker">
                    <input
                      type="text"
                      className="form-control b-r-0"
                      placeholder="Search location"
                      id="add_guest"
                    />
                    <span className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-clock-o"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="m-t-20" htmlFor="val-skill">
                    SET REMINDER
                  </label>
                  <select
                    className="form-control"
                    id="val-skill"
                    name="val-skill"
                  >
                    <option value="">Please select</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-danger m-t-50" type="submit">
                ADD EVENT
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
