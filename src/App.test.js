import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr } from "./test-utils/testUtil";
import hooksActions from "./actions/hooksActions";

const mockGetSecretWord = jest.fn();


const setup = () => {
    mockGetSecretWord.mockClear();
    hooksActions.getSecretWord = mockGetSecretWord;
    return mount(<App />);
};

it("renders without crashing", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "app-component");
    expect(component.length).toBe(1);
});


describe("> getSecretWord call", () => {
    it("should getSecretWord calls on App mount", () => {
        setup();

        expect(mockGetSecretWord).toHaveBeenCalled();
    });

    it("should not call `getSecretWord` after update ", () => {
        const wrapper = setup();

        mockGetSecretWord.mockClear();
        wrapper.setProps();
        expect(mockGetSecretWord).not.toHaveBeenCalled()
    });
});