import React from "react";
import Header from "../Header/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { InputField, Heading, InputSubHeading, FormBox } from "../masterCss";
import Button from "../button";
import postLogin from '../../utils/postData'
import postLogIn from "../../utils/postData";
import {Redirect, useHistory} from 'react-router-dom'

const Login = ({ setUsername }) => {
  const history = useHistory()
  return (
    <div>
      <Heading>Log In</Heading>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "REQUIRED";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid Email";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          postLogIn(values).then(result => {
            if(result=== "cookie exists") {
              history.push('/login')
            }
          });
          
        }}
      >
        {({ isSubmitting }) => (
          <FormBox>
            <InputSubHeading>
              Email
              <InputField type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </InputSubHeading>
            <InputSubHeading>
              Password
              <InputField type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </InputSubHeading>
            <Button type="submit" disabled={isSubmitting}>
              {" "}
              Log In{" "}
            </Button>
          </FormBox>
        )}
      </Formik>
    </div>
  );
};

export default Login;
