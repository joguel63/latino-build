import React from 'react';
import { Formik, Field, Form } from "formik";
export default function PaymentContent() {
  return (
   <div className="content-body">
    <div className="container">
     <div className="row">
      <div className="col-xl-8 mx-auto">
       <div className="setting-billing">
        <Formik
          initialValues={{
            full_name: "",
            country_name: "",
            state_name: "",
            street_Address: "",
            city_name: "",
            phone_no: "",
            email_address: ""
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
           <label className="col-lg-4 col-form-label">FULL NAME</label>
           <div className="col-lg-8">
             <Field
               type="text" 
               className="form-control" 
               name="full_name" 
               placeholder="John Doe" 
               required
             />
           </div>
           </div>
           <div className="form-group row">
            <label className="col-lg-4 col-form-label">COUNTRY NAME</label>
            <div className="col-lg-8">
              <Field 
                as="select"
                className="form-control"
                name="country_name"
              >
              <option value="0">India</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Field>
            </div>
           </div>
           <div className="form-group row">
            <label className="col-lg-4 col-form-label">STATE NAME</label>
            <div className="col-lg-8">
            <Field
              as="select"
              className="form-control"
              name="state_name"
            >
              <option value="0">Delhi</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Field>
            </div>
           </div>
           <div className="form-group row">
            <label className="col-lg-4 col-form-label">TOWN/CITY</label>
            <div className="col-lg-8">
              <Field
                as="select"
                className="form-control"
                name="city_name"
              >
              <option value="0">Noida</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              </Field>
            </div>
           </div>
           <div className="form-group row">
            <label className="col-lg-4 col-form-label">STREET ADDRESS</label>
            <div className="col-lg-8">
              <Field
                type="text" 
                className="form-control" 
                name="street_Address" 
                placeholder="Street 2/45 House No. 120" 
                required
              />
            </div>
            </div>
            <div className="form-group row">
             <label className="col-lg-4 col-form-label">PHONE NUMBER</label>
             <div className="col-lg-8">
               <Field
                  type="text" 
                  className="form-control" 
                  name="phone_no" 
                  placeholder="+91 123 456 7890" 
                  required
               />
             </div>
             </div>
             <div className="form-group row">
              <label className="col-lg-4 col-form-label">EMAIL ADDRESS</label>
              <div className="col-lg-8">
                <Field
                  type="email" 
                  className="form-control" 
                  name="email_address" 
                  placeholder="Johndoe@gmail.com" 
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
         </div>
        </div>
       </div>
  );
}
