import React from "react";
import Header from "../Header/Header";
import {InputField,GeneralText,InputSubHeading,FormBox} from '../masterCss'
import Button from '../button'
import { Formik, ErrorMessage } from "formik";

function Register3({setReg3}) {
  return (
    <>
      <Header />
      {/* progress graphic thing */}
      <p>
        We recommend that you aim htmlFor 10 minutes of chatti activity everyday
        </p>
       <Button />
      {/* video and caption */}
      {/* scroll down arrow */}
      <Formik
      initialValues={{ how_often: "daily", new_ideas_time: "8pm", weekly_goal: 80}}
      validate={values => {
        const errors={}
        if(!values.how_often) {
          errors.how_often = "select an option"
        } else if (!values.new_ideas_time){
          errors.new_ideas_time = "select an option"
        } else if (!values.weekly_goal) {
          errors.weekly_goal = "select an option"
        }
        return errors

      }}
      onSubmit={(values, {setSubmitting})=>{
        console.log(values)
        setReg3(values)
      }}
      >
       {({isSubmitting}) =>(
         <FormBox>
           <InputSubHeading>How often do you want to get new ideas?
           <select>
             <option name="how_often" type="text">daily</option>
             <option name="how_often" type="text">weekly</option>
             <option name="how_often" type="text">fortnightly</option>
             <option name="how_often" type="text">monthly</option>
           </select>
           <ErrorMessage name="how_often" component="div"></ErrorMessage>
           </InputSubHeading>
           
          <InputSubHeading>What time do you want to get new ideas?
           <select>

             <option name="new_ideas_time" type="number">8pm</option>
             <option name="new_ideas_time" type="number">7pm</option>
             <option name="new_ideas_time" type="number">6pm</option>
             <option name="new_ideas_time" type="number">5pm</option>
             <option name="new_ideas_time" type="number">4pm</option>
             <option name="new_ideas_time" type="number">3pm</option>
             <option name="new_ideas_time" type="number">2pm</option>
             <option name="new_ideas_time" type="number">1pm</option>
          </select> 
           <ErrorMessage name="new_ideas_time" component="div"></ErrorMessage>
           </InputSubHeading>

           <InputSubHeading>What is your weekly goal?
           <select>
             <option name="weekly_goal" type="number">30</option>
             <option name="weekly_goal" type="number">60</option>
             <option name="weekly_goal" type="number">80</option>
             <option name="weekly_goal" type="number">100</option>
          </select> 
           <ErrorMessage name="weekly_goal" component="div"></ErrorMessage>
           </InputSubHeading>

           <Button type='submit' type="button" disabled={isSubmitting}></Button>


         </FormBox>
       )}

      </Formik>
      


      
      
    </>
  );
}

export default Register3;
