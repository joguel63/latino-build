import React from 'react';
import { Dropdown } from "react-bootstrap";
import userImg from  "../../assets/images/thumb/1.png";
import CustomDropdown from "../custom_dropdown";

export default function RecentSells() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title m-b-15">RECENT SELLS</h4>
        <div className="upcoming-events">
          <div className="row">
            <div className="col-xl-4">
              <h6>This Week</h6>
              <h4 className="color-primary">$5500.00</h4>
            </div>
            <div className="col-xl-4">
              <h6>Previous Week</h6>
              <h4 className="color-primary">$6550.00</h4>
            </div>
          </div>
          <div className="table-responsive m-t-15 custom-table">
            <table className="table">
              <tbody>
                <tr>
                  <td><img src={userImg} alt="user" /></td>
                  <td>
                    John Doe
                   <a href="#"> Event Name Here</a>
                  </td>
                  <td>X1</td>
                  <td>165</td>
                  <td>
                    <CustomDropdown>
                      <a href="#" className="dropdown-item">Edit</a>
                      <a href="#" className="dropdown-item">Delete</a>
                    </CustomDropdown>
                  </td>
                </tr>
                <tr>
                  <td><img src={userImg} alt="user" /></td>
                  <td>
                    John Doe
                  <a href="#"> Event Name Here</a>
                  </td>
                  <td>X1</td>
                  <td>165</td>
                  <td>
                    <CustomDropdown>
                      <a href="#" className="dropdown-item">Edit</a>
                      <a href="#" className="dropdown-item">Delete</a>
                    </CustomDropdown>
                  </td>
                </tr>
                <tr>
                  <td><img src={userImg} alt="user" /></td>
                  <td>
                    John Doe
                  <a href="#"> Event Name Here</a>
                  </td>
                  <td>X1</td>
                  <td>165</td>
                  <td>
                    <CustomDropdown>
                      <a href="#" className="dropdown-item">Edit</a>
                      <a href="#" className="dropdown-item">Delete</a>
                    </CustomDropdown>
                  </td>
                </tr>
                <tr>
                  <td><img src={userImg} alt="user" /></td>
                  <td>
                    John Doe
                  <a href="#"> Event Name Here</a>
                  </td>
                  <td>X1</td>
                  <td>165</td>
                  <td>
                    <CustomDropdown>
                      <a href="#" className="dropdown-item">Edit</a>
                      <a href="#" className="dropdown-item">Delete</a>
                    </CustomDropdown>
                  </td>
                </tr>
                <tr>
                  <td><img src={userImg} alt="user" /></td>
                  <td>
                    John Doe
                  <a href="#"> Event Name Here</a>
                  </td>
                  <td>X1</td>
                  <td>165</td>
                  <td>
                    <CustomDropdown>
                      <a href="#" className="dropdown-item">Edit</a>
                      <a href="#" className="dropdown-item">Delete</a>
                    </CustomDropdown>
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
