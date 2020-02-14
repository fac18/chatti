import React from "react";
import { render } from "@testing-library/react";
import HomeLoggedIn from "./HomeLoggedIn";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("includes Your next activity header", () => {
  const history = createMemoryHistory();

  const { getByText } = render(
    <Router history={history}>
      <HomeLoggedIn
        userData={{
          userName: "Georgia",
          userEmail: "Georgia1@hotmail.com",
          childName: "Freddie",
          childBirthday: "1/1/2020",
          childGender: "male"
        }}
      />
    </Router>
  );
  const headerElement = getByText(/Your next activity:/i);
  expect(headerElement).toBeInTheDocument();
});
