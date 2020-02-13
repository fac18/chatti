import React from "react";
import Header from "../Header/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { InputField, Heading, InputSubHeading, FormBox } from "../masterCss";
import Button from "../button";
import postLogIn from "../../utils/postData";
import { Redirect, useHistory } from "react-router-dom";
import * as SC from "./Login.style";

const Login = ({ setUsername }) => {
  const history = useHistory();
  return (
    <SC.Login>
      <Header />
      <div>
        <SC.Divider />
        <Heading>Log in to your profile</Heading>
        <SC.Divider />
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
              if (result === "cookie exists") {
                history.push("/login");
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
              <Button
                type="submit"
                disabled={isSubmitting}
                buttonText="Login"
                bottom
              ></Button>
            </FormBox>
          )}
        </Formik>
      </div>
    </SC.Login>
  );
};

export default Login;
