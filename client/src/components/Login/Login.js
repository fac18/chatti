import React from "react";
import Header from "../Header/Header";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {InputField,Heading,InputSubHeading} from '../masterCss'
import Button from '../button'



 const Login = () => {
  return (
    <div>
      <Heading>Log In</Heading>
      <Formik
      initialValues={{email:'' , password: ''}}
      validate={values => {
        const errors= {}
        if(!values.email) {
          errors.email = "REQUIRED"
          
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid Email"
        }
        return errors;
      }
      

      }
      // onSubmit={(values, {setSubmitting}) =>{

      // }
      
      >
        {({isSubmitting}) => (
          <Form>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='div'/>
            <Field type='password' name='password'/>
            <ErrorMessage name='password' component='div'/>
            <Button type='submit' disabled={isSubmitting}> Log In </Button>
          </Form>

        )}


      </Formik>

      
      
    </div>
  )
}


export default Login;
