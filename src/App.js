import React from 'react';
import HomeOne from "./pages/home_one";
import ActiveEvents from "./pages/active_events";
import DraftEvents from "./pages/draft_events";
import MyEvents from "./pages/my_events";
import Members from "./pages/members";
import Message from "./pages/message";
import ChatPage from "./pages/chat";
import CalendarPage from "./pages/calendar";
import Profile from "./pages/profile";
import PaymentPage from "./pages/payment";
import Notification from "./pages/notification";
import Personal from "./pages/personal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/style.scss";
import "./assets/css/shortcode.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeOne/>
          </Route>
          <Route path="/active_events">
            <ActiveEvents/>
          </Route>
          <Route path="/draft_events">
            <DraftEvents/>
          </Route>
          <Route path="/my_events">
            <MyEvents/>
          </Route>
          <Route path="/members">
            <Members/>
          </Route>
          <Route path="/message">
            <Message/>
          </Route>
          <Route path="/chat">
            <ChatPage/>
          </Route>
          <Route path="/calendar">
            <CalendarPage/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/payment">
            <PaymentPage/>
          </Route>
          <Route path="/notification">
            <Notification/>
          </Route>
          <Route path="/personal">
            <Personal/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
