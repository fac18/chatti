import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test("renders home page text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /Interactive ideas to inspire special moments/i
  );
  expect(linkElement).toBeInTheDocument();
});


    
// describe('App', () => {
//   it('renders without crashing given the required props', () => {
//     const props = {
//       isFetching: false,
//       dispatch: jest.fn(),
//       selectedSubreddit: 'reactjs',
//       posts: []
//     }
//     const wrapper = shallow(<App {...props} />)
//     expect(toJson(wrapper)).toMatchSnapshot()
//   })
// })