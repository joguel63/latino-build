import React from 'react';

export default function SingleMessageMember(props) {
 const { image, name, message, time, unreadMessage } = props;
  return (
   <li className="list-group-item msg-single">
    <div className="custom-control custom-checkbox">
     <input type="checkbox" className="custom-control-input" id="customCheck0" />
     <label className="custom-control-label" htmlFor="customCheck0"></label>
    </div>
    <div className="media">
     <img className="mr-3 img-fluid" src={ image } alt={ name }/>
     <div className="media-body">
     <h3 className="mt-0">{ name }</h3>
      <p>{ message }</p>
     </div>
     <div className="time">
      <h5>{ time }</h5>
      { unreadMessage ? 
       <span className="bg-danger">{ unreadMessage }</span>
      : null }
     </div>
    </div>
   </li>
  );
}
