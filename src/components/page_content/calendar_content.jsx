import React from 'react';
import EventsCalendar from "../events/events_calendar";
import { Modal } from "react-bootstrap";
import useToggle from "../../hooks/use_toggle";
export default function CalendarContent() {
 const [show, handleShow, handleClose] = useToggle();
  return (
    <div className="content-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h4>Calendar</h4>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <button
                      className="btn btn-primary btn-block calendar-btn"
                      onClick={handleShow}
                    >
                    <i className="ti-plus f-s-12 m-r-5"></i> Create New
                   </button>
                    <div id="external-events" className="m-t-20">
                      <p>Drag and drop your event or click in the calendar</p>
                      <div className="external-event bg-primary">
                        <i className="fa fa-move"></i>New Theme Release
                      </div>
                      <div className="external-event bg-success">
                        <i className="fa fa-move"></i>My Event
                      </div>
                      <div className="external-event bg-warning">
                        <i className="fa fa-move"></i>Meet manager
                     </div>
                      <div className="external-event bg-dark">
                        <i className="fa fa-move"></i>Create New theme
                     </div>
                    </div>
                    <div className="checkbox m-t-40">
                      <input id="drop-remove" type="checkbox" />
                      <label htmlFor="drop-remove" className="pl-2">
                        Remove after drop
                      </label>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-box events-wrapper">
                      <EventsCalendar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h4 className="modal-title">
            <strong>Add New Event</strong>
          </h4>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="col-md-6">
                <label className="control-label">Category Name</label>
                <input
                  className="form-control form-white"
                  placeholder="Enter name"
                  type="text"
                  name="category-name"
                />
              </div>
              <div className="col-md-6">
                <label className="control-label">Choose Category Color</label>
                <select
                  className="form-control form-white"
                  placeholder="Choose a color..."
                  name="category-color"
                >
                  <option value="success">Success</option>
                  <option value="danger">Danger</option>
                  <option value="info">Info</option>
                  <option value="pink">Pink</option>
                  <option value="primary">Primary</option>
                  <option value="warning">Warning</option>
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-default waves-effect" onClick={handleClose}>
            Close
         </button>
          <button
            type="button"
            className="btn btn-danger waves-effect waves-light save-category"
            onClick={handleClose}
          >
            Save
         </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
