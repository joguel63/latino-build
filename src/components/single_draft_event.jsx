import React from 'react';
import CustomDropdown from "./custom_dropdown";
export default function SingleDraftEvent(props) {
 const { author, event_name, event_date } = props;
  return (
   <tr>
    <td className="name">By { author }</td>
    <td className="evemt-name"> {event_name }
    <span> (Draft) </span>
    </td>
    <td className="date">{ event_date }</td>
    <td>
     <CustomDropdown>
      <a className="dropdown-item" href="#">Edit</a>
      <a className="dropdown-item" href="#">Delete</a>
     </CustomDropdown>
    </td>
   </tr>
  );
}
