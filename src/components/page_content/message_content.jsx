import React from 'react';
import authorImg from "../../assets/images/message/author.png";
import CustomDropdown from "../custom_dropdown";
import SingleMessageMember from "../single_message_member";
import ChatMember from "../chat_member";
export default function MessageContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-8">
            <div className="event-msg-left">
              <div className="msg-navigation">
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        required
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                      SELECT ALL
                    </label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <label
                          className="event-msg-btn"
                          htmlFor="inputGroupSelect01"
                        >
                          ADD TO
                      </label>
                      </div>
                      <select className="msg-btn" id="inputGroupSelect01">
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <button className="msg-btn">Delete</button>
                      <button className="msg-btn">Report</button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <CustomDropdown>
                      <a className="dropdown-item" href="#">
                        Option 1
                       </a>
                      <a className="dropdown-item" href="#">
                        Option 2
                       </a>
                      <a className="dropdown-item" href="#">
                        Option 3
                        </a>
                    </CustomDropdown>
                  </div>
                </div>
              </div>
              <ul className="list-group">
                <SingleMessageMember
                  image={authorImg} 
                  name="John Doe" 
                  message="Hey, how are you!" 
                  time="07.50 PM" 
                  unreadMessage="5"
                />
                <SingleMessageMember
                  image={authorImg} 
                  name="Jassica" 
                  message="Sed elementum libero mattis velit pulvinar" 
                  time="04.50 PM" 
                />
                <SingleMessageMember
                  image={authorImg} 
                  name="Anamika" 
                  message="Sed elementum libero mattis velit pulvinar" 
                  time="08.10 PM" 
                />
                <SingleMessageMember
                  image={authorImg} 
                  name="Rock" 
                  message="Hey, how are you!" 
                  time="04.25 PM" 
                />
                <SingleMessageMember
                  image={authorImg} 
                  name="Andy William" 
                  message="Sed elementum libero mattis velit pulvinar" 
                  time="02.25 PM" 
                />
                <SingleMessageMember
                  image={authorImg} 
                  name="Akash" 
                  message="Cras sed orci sodales enim porttitor feugiat" 
                  time="09.40 PM" 
                />
              </ul>
            </div>
          </div>
          <div className="col-xl-3 left-line">
            <div className="event-sideber m-l-15">
              <h4>QUICK CHAT</h4>
              <ChatMember
                name="John Doe"
                image={authorImg}
                status="online"
              />
              <ChatMember
                name="Jassica"
                image={authorImg}
                status="online"
              />
              <ChatMember
                name="Anamika"
                image={authorImg}
                status="online"
              />
              <ChatMember
                name="Rock"
                image={authorImg}
                status="online"
              />
              <ChatMember
                name="Johnson Smith"
                image={authorImg}
                status="online"
              />
              <ChatMember
                name="Arrohi"
                image={authorImg}
                status="online"
              />
              <ChatMember
                name="Any William"
                image={authorImg}
                status="online"
              />
              <ChatMember
                name="Akash"
                image={authorImg}
                status="online"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
