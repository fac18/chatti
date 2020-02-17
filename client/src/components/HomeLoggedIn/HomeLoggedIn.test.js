import React from "react";
import { render } from "@testing-library/react";
import HomeLoggedIn from "./HomeLoggedIn";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("Home after logging in renders correctly", () => {
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

});
