import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import {
  InputField,
  GeneralText,
  InputSubHeading,
  FormBox,
  Error,
  RecommendationParagraph,
  FormContainer,
} from '../masterCss'
import Button from '../button'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import InsertUserData from '../../utils/postFormData'
import postFormData from '../../utils/postFormData'

function Register3({ setReg3 }) {
  return (
    <FormContainer>
      <RecommendationParagraph>
        We recommend that you aim For 10 minutes of chatti activity everyday
      </RecommendationParagraph>

      <Formik
        initialValues={{
          how_often: 'daily',
          new_ideas_time: '6pm',
          weekly_goal: '80 minutes',
        }}
        // validate={values => {
        //   const errors={}
        //   if(!values.how_often) {
        //     errors.how_often = "select an option"
        //   } else if (!values.new_ideas_time){
        //     errors.new_ideas_time = "select an option"
        //   } else if (!values.weekly_goal) {
        //     errors.weekly_goal = "select an option"
        //   }
        //   return errors

        // }}
        onSubmit={(values, { setSubmitting }) => {
          setReg3(values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputSubHeading>
              How often do you want to get new ideas?
              <InputField component="select" name="how_often">
                <option name="how_often" type="text">
                  daily
                </option>

                <option name="how_often" type="text">
                  weekly
                </option>
                <option name="how_often" type="text">
                  fortnightly
                </option>
                <option name="how_often" type="text">
                  monthly
                </option>
              </InputField>
              <Error name="how_often" component="div"></Error>
            </InputSubHeading>

            <InputSubHeading>
              What time do you want to get new ideas?
              <InputField component="select" name="new_ideas_time">
                <option name="new_ideas_time" type="text">
                  8pm
                </option>
                <option name="new_ideas_time" type="text">
                  7pm
                </option>
                <option name="new_ideas_time" type="text">
                  6pm
                </option>
                <option name="new_ideas_time" type="text">
                  5pm
                </option>
                <option name="new_ideas_time" type="text">
                  4pm
                </option>
                <option name="new_ideas_time" type="text">
                  3pm
                </option>
                <option name="new_ideas_time" type="text">
                  2pm
                </option>
                <option name="new_ideas_time" type="text">
                  1pm
                </option>
              </InputField>
              <Error name="new_ideas_time" component="div">
                Please select time
              </Error>
            </InputSubHeading>

            <InputSubHeading>
              What is your weekly goal?
              <InputField component="select" name="weekly_goal">
                <option name="weekly_goal" type="text">
                  80 minutes
                </option>

                <option name="weekly_goal" type="text">
                  30 minutes
                </option>
                <option name="weekly_goal" type="text">
                  60 minutes
                </option>
                <option name="weekly_goal" type="text">
                  100 minutes
                </option>
              </InputField>
              <Error name="weekly_goal" component="div">
                Please select weekly goal
              </Error>
              <Button type="submit" type="button" buttonText="Continue"></Button>
  
              <Button
                type="submit"
                type="button"
                buttonText="Accept recommended settings"
                disabled={isSubmitting}
              ></Button>
            </InputSubHeading>

          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}

export default Register3
