import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "./test-utils/testUtil";

const setup = () => {
    return shallow(<App />);
};

it("renders without crashing", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "app-component");
    expect(component.length).toBe(1);
});
