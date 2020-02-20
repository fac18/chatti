import React from 'react'
import { render } from '@testing-library/react'
import Register4 from './Register4'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test('includes Great! header', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <Register4 names={{ userName: 'Georgia', childName: 'Freddie' }} />
    </Router>
  )
  const headerElement = getByText(/Great!/i)
  expect(headerElement).toBeInTheDocument()
})
