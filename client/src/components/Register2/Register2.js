import React from "react";
import Header from "../Header/Header";
import { FormBox, InputField, InputSubHeading } from "../masterCss";
import { ErrorMessage,Formik } from "formik";
import Button from '../button'

function Register2({setReg2}) {
  return (
    <>
      <Formik
        initialValues={{child_name: "", child_birth:"", gender:""}}
        validate={values => {
          const errors = {};
          if (!values.child_name) {
            errors.child_name = "Child's name required";
          } else if (!values.child_birth) {
            errors.chiild_birth = "Child's birthday required";
          
        
          } 
          // else if (!values.gender) {
          //   errors.gender = "Child's gender selection required"
        // }
          return errors;
        }}
         onSubmit={(values, {setSubmitting})=>{
           console.log(values)
           setReg2(values)
         }}

         
      >
        {({isSubmitting}) =>(
          <FormBox>
            <InputSubHeading>
            What is your Child's name?
            <InputField type="text" name="child_name" />
            <ErrorMessage name="child_name" component="div"/> 
            </InputSubHeading>
          
            <InputSubHeading>
            When is your child's birthday?
            <InputField type="date" name="child_birth" placeholder='e.g. 20/12/2016' />
            <ErrorMessage name="child_birth" component="div"/> 
            </InputSubHeading>

            <Button type='submit' disabled={isSubmitting}></Button>
          
            


          </FormBox>
        )} 

        

      </Formik>
    </>
  );
}

export default Register2;
