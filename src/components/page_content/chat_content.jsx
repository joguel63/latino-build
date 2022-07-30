import React from 'react';
import authorImg from "../../assets/images/message/author.png";
import CustomDropdown from "../custom_dropdown";
import ChatSidebar from "../chat_sidebar";
import { Field, Form, Formik } from 'formik';
import SendMessage from "../send_message";
import ReciveMessage from "../recive_message";

export default function ChatContent() {
  return (
   <div className="content-body">
    <div className="container">
     <div className="row">
      <div className="col-xl-4">
          <ChatSidebar/>
      </div>
      <div className="col-xl-8">
       <div className="event-chat-ryt">
        <ul className="list-group">
         <li className="list-group-item">
          <div className="media">
           <div className="media-img">
              <img className="mr-3 img-fluid" src={authorImg} alt={authorImg} />
           </div>
           <div className="media-body">
            <h3 className="mb-0">Jassica</h3>
            <p>Online</p>
           </div>
           <CustomDropdown>
            <a className="dropdown-item" href="#">Option 1</a>
            <a className="dropdown-item" href="#">Option 2</a>
            <a className="dropdown-item" href="#">Option 3</a>
           </CustomDropdown>
          </div>
         </li>
         <li className="list-group-item">
          <div className="char-area">
            <ReciveMessage
              message="Hey How are you?"
              time="8.00 PM"
            />
            <SendMessage
              message="Hey I am fine. you?"
              time="8.05 PM"
            />
            <ReciveMessage
              message="Sed elementum libero mattis velit pulvinar, ut sodale ex euismod. In in imperdiet purus, a molestie ante. Nullam a vestibulum diam, et commodo quam."
              time="8.10 PM"
            />
            <SendMessage
              message="ok Sir"
              time="8.20 PM"
            />
          </div>
          <div className="char-type">
          <Formik
           initialValues={{ message_text: '' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {() => (
            <Form className="d-flex justify-content-center">
                <Field
                  type="text"
                  name="message_text"
                  placeholder="Type Here..."
                  className="form-control"
                  required
                />
                <button type="submit" className="btn btn-danger">
                  SEND
                </button>
              </Form>
            )}
          </Formik>
          </div>
         </li>
        </ul>
       </div>
      </div>
     </div>
    </div>
   </div>

  );
}
