import React from 'react';
import SidebarOne from "../sidebar_one";
import CustomDropdown from "../custom_dropdown";

export default function NotificationContent() {
  return (
   <div className="content-body">
    <div className="container">
     <div className="row justify-content-between">
      <div className="col-xl-8">
       <div className="row">
        <div className="col-xl-12">
         <div className="event-draft-table">
          <div className="table-responsive custom-table">
           <table className="table">
            <tbody>
             <tr>
              <td className="name">By John Doe</td>
              <td className="evemt-name">Event Name
                     <span>(Draft)</span>
              </td>
              <td className="date">July 12, 2018</td>
              <td>
               <CustomDropdown>
                <a className="dropdown-item" href="https://www.google.com/">Edit</a>
                <a className="dropdown-item" href="https://www.google.com/">Delete</a>
               </CustomDropdown>
              </td>
             </tr>
             <tr>
              <td className="name">By John Doe</td>
              <td className="evemt-name">Event Name
                    <span>(Draft)</span>
              </td>
              <td className="date">July 12, 2018</td>
              <td>
               <CustomDropdown>
                <a className="dropdown-item" href="https://www.google.com/">Edit</a>
                <a className="dropdown-item" href="https://www.google.com/">Delete</a>
               </CustomDropdown>
              </td>
             </tr>
             <tr>
              <td className="name">By John Doe</td>
              <td className="evemt-name">Event Name
                     <span>(Draft)</span>
              </td>
              <td className="date">July 12, 2018</td>
              <td>
               <CustomDropdown>
                <a className="dropdown-item" href="https://www.google.com/">Edit</a>
                <a className="dropdown-item" href="https://www.google.com/">Delete</a>
               </CustomDropdown>
              </td>
             </tr>
             <tr>
              <td className="name">By John Doe</td>
              <td className="evemt-name">Event Name
                     <span>(Draft)</span>
              </td>
              <td className="date">July 12, 2018</td>
              <td>
               <CustomDropdown>
                <a className="dropdown-item" href="https://www.google.com/">Edit</a>
                <a className="dropdown-item" href="https://www.google.com/">Delete</a>
               </CustomDropdown>
              </td>
             </tr>
            </tbody>
           </table>
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
  );
}
