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

describe("> secretWord prop is null", () => {
    let wrapper;
    beforeEach(function() {
        wrapper = setup(null);
    });
    it("should not render app if secretWord is null", () => {
        const appComponent = findByTestAttr(wrapper, "app-component");
        expect(appComponent.exists()).toBe(false);
    });

    it("should render Spinner when secretWord is null", () => {
        const spinner = findByTestAttr(wrapper, "spinner");
        expect(spinner.exists()).toBe(true);
    });
});