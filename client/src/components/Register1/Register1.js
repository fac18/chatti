import React from 'react'
import {
  InputField,
  Heading,
  InputSubHeading,
  FormBox,
  Error,
} from '../masterCss'
import { ErrorMessage, Formik } from 'formik'
import Button from '../button'
import checkUser from '../../utils/checkUser'

function Register1({ setReg1 }) {
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = ' name is REQUIRED'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email'
          } else if (!values.email) {
            errors.email = 'email is required'
          } else if (values.email) {
            return checkUser(values.email)
              .then(result => {
                if (result) {
                  errors.email = 'User already exists'
                  return errors
                }
              })
              .catch(result =>
                console.log('error when checking if user already exists')
              )
          } else if (!values.password) {
            errors.password = 'Enter a valid password'
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(
              values.password
            )
          ) {
            errors.password =
              'Your password must contain at least 1 lowercase, 1 uppercase and 1 number. Must be atleast 8 characters long '
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setReg1(values)
        }}
      >
        {({ isSubmitting }) => (
          <FormBox>
            <InputSubHeading>
              {' '}
              Your name:
              <InputField type="text" name="name" />
              <Error name="name" component="div" />
            </InputSubHeading>
            <InputSubHeading>
              {' '}
              Your email:
              <InputField type="email" name="email" />
              <Error name="email" component="div" />
            </InputSubHeading>
            <InputSubHeading>
              {' '}
              Your password:
              <InputField type="password" name="password" />
              <Error name="password" component="div" />
            </InputSubHeading>
            <Button
              type="submit"
              disabled={isSubmitting}
              buttonText={'Continue'}
              bottom
            ></Button>
          </FormBox>
        )}
      </Formik>
    </>
  )
}

export default Register1
