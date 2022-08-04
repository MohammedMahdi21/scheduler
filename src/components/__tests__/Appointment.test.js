/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/

import Confirm from "components/Appointment/Confirm";
import Appointment from "components/Appointment";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";


/*
  A test that renders a React Component
*/
describe("Appointment", () => {
  it("renders Appointment without crashing", () => {
    render(<Appointment />);
  });

  it("renders Confirm without crashing", () => {
    render(<Confirm />);
  });

  it("renders Empty without crashing", () => {
    render(<Empty />);
  });

  it("renders Form without crashing", () => {
    render(<Form interviewers={[]} />);
  });

  it("renders Header without crashing", () => {
    render(<Header />);
  });

  it("renders Show without crashing", () => {
    render(<Show interviewer={[]} />);
  });

  it("renders Status without crashing", () => {
    render(<Status />);
  });
});