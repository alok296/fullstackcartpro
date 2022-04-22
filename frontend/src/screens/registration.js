import React from "react";
import "./registration.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import Errormsg from "../component/Errormsg";
const  validationSchema = yup.object({
  name:yup.string().required(`Name is Required !!`),
  email:yup.string().required(`Email is Required !!`),
  password:yup.string().required(`Password is Required !!`),
  contact:yup.string().required(`Contact is Required !!`),
  address:yup.string().required(`Address is Required !!`),
  gender:yup.string().required(`Gender is Required !!`),
})

export default function Registration() {
  const navigate = useNavigate();
  const submitfun = (value) => {
    try {
      axios.post("/user/postuser", {
        name: value.name,
        email: value.email,
        password: value.password,
        contact: value.contact,
        address: value.address,
        gender: value.gender,
      });
      alert(`user : ${value.name} Successfully Created...`);
    } catch (error) {
      alert(error);
    }
    navigate("/login");
  };
  return (
    <div className="newUser">
      <Formik
      validationSchema={validationSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          contact: "",
          address: "",
          gender: "",
        }}
        onSubmit={submitfun}
      >
        <Form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <Field name="name" placeholder="Enter Your User Name" />
            <Errormsg name="name"/>
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <Field name="email" placeholder="Enter Email" />
            <Errormsg name="email"/>
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <Field
              name="password" 
              type="password"
              placeholder="Enter Password"
            />
            <Errormsg name="password"/>
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <Field
              name="contact"
              type="number"
              placeholder="Enter Contact No"
            />
            <Errormsg name="contact"/>
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <Field name="address" />
            <Errormsg name="address"/>
          </div>
          <div className="gender">
            <label>Gender</label>
            <br />
            <br />
            <label htmlFor="male" style={{ marginTop: "2px" }}>
              male
            </label>
            &nbsp;&nbsp;
            <Field id="male" name="gender" value="male" type="radio" />
            <label htmlFor="female" style={{ marginLeft: "5px" }}>
              Female
            </label>
            &nbsp;&nbsp;
            <Field id="female" name="gender" value="female" type="radio" />
            <Errormsg name="gender"/>
          </div>
          <div className="newUserItem">
            <label>Date</label>
            <Field name="date" type="date" />
            <Errormsg name="date"/>
          </div>
          <div className="newUserItem">
            <label>Work Place</label>
            <Field name="place" as="select">
              <option value="indore">Indore</option>
              <option value="bhopal">Bhopal</option>
              <option value="Dewas">Ujjain</option>
              <option value="Dewas">Dewas</option>
            </Field>
            <Errormsg name="place"/>
          </div>
          <div className="newUserItem">
            <label>About YourSelf</label>
            <Field name="about" type="textarea" />
            <Errormsg name="about"/>
          </div>
          <br />
          <button type="submit" className="newUserButton">
            Create User
          </button>
        </Form>
      </Formik>
    </div>
  );
}
