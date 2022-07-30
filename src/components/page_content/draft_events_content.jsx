import React from 'react';
import SidebarOne from "../sidebar_one";
import SingleDraftEvent from "../single_draft_event";
export default function DraftEventsContent() {
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
                        <SingleDraftEvent
                          author="John Doe"
                          event_name="Banking"
                          event_date="July 12, 2020"
                        />
                        <SingleDraftEvent
                          author="Ibrahim"
                          event_name="Privacy"
                          event_date="may 5, 2019"
                        />
                        <SingleDraftEvent
                          author="Rohan Khan"
                          event_name="Policy"
                          event_date="July 12, 2019"
                        />
                        <SingleDraftEvent
                          author="Jony Kossain"
                          event_name="New Features"
                          event_date="July 12, 2018"
                        />
                        <SingleDraftEvent
                          author="Fazlur Rahman"
                          event_name="Services"
                          event_date="July 12, 2020"
                        />
                        <SingleDraftEvent
                          author="Md. Joha"
                          event_name="Ecommerce"
                          event_date="July 12, 2020"
                        />
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
