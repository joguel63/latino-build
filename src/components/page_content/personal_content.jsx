import React from 'react';
import { Formik, Field, Form } from "formik";
export default function PersonalContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="setting-personal">
              <Formik
                initialValues={{
                  val_username: "",
                  val_email: "",
                  val_password: "",
                  val_about: "",
                  lang_choose: "",
                  location_name: "",
                  val_website: ""
                }}
                onSubmit={async values => {
                  await new Promise(resolve => setTimeout(resolve, 500));
                  console.log(JSON.stringify(values, null, 2));
                }}
              >
              <Form>
              <div className="list-group">
                <div className="list-group-item">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="val-username">NAME</label>
                    <div className="col-lg-6">
                      <Field 
                        type="text" 
                        className="form-control" 
                        id="val-username" 
                        name="val_username" 
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">EMAIL</label>
                    <div className="col-lg-6">
                      <Field
                        type="email" 
                        className="form-control" 
                        name="val_email" 
                        placeholder="Johndoe@gmail,com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">PASSWORD</label>
                    <div className="col-lg-6">
                      <Field
                        type="text" 
                        className="form-control" 
                        name="val_password" 
                        placeholder="Enter new password"
                      />
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">ABOUT</label>
                    <div className="col-lg-6">
                      <Field
                        type="text" 
                        className="form-control" 
                        name="val_about" 
                        placeholder="Describe your self here..."
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">LANGUAGE</label>
                    <div className="col-lg-3">
                      <Field
                        as="select"
                        className="form-control"
                        name="lang_choose"
                      >
                        <option value="0">English</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">LOCATION</label>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <Field
                          type="text" 
                          className="form-control b-r-0" 
                          name="location_name"
                          placeholder="Search location" 
                          required
                        />
                        <span className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-crosshairs"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-3 text-center">
                      <button className="btn btn-secondary">EDIT</button>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">WEBSITE</label>
                    <div className="col-lg-6">
                      <Field
                        type="text" 
                        className="form-control" 
                        name="val_website" 
                        placeholder="www.yoursite.com" 
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="list-group-item text-center">
                  <button className="btn btn-secondary" type="submit">SAVE ADDRESS</button>
                </div>
              </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="event-sideber">
              <h4>INTEREST</h4>
              <div className="event-sideber-search search-2 setting">
                <Formik
                  initialValues={{
                    search_location: ""
                  }}
                  onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                  }}
                >
                <Form>
                  <Field
                    type="text" 
                    className="form-control" 
                    name= "search_location"
                    placeholder="Search Location" 
                    required
                  />
                  <button type="submit"><i className="fa fa-search"></i></button>
                  </Form>
                </Formik>
              </div>
              <div className="sideber-meta">
                <button className="btn btn-outline-secondary">FOOD</button>
                <button className="btn btn-outline-secondary">AWARDS</button>
                <button className="btn btn-outline-secondary">SCIENCE</button>
                <button className="btn btn-outline-secondary">TECHNOLOGY</button>
              </div>
              <h4>ADD SOCIAL ACCOUNT</h4>
              <div className="row form-material m-b-30">
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Http://" required />
                </div>
              </div>
              <button className="btn btn-secondary">ADD</button>
              <div className="sideber-social">
                <h4 className=" m-t-30">ADDED -</h4>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
