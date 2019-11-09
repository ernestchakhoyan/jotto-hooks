import React from "react";
import { shallow } from "enzyme";
import {
    findByTestAttr,
    checkProps
} from "../../test-utils/testUtil";
import Input from "./Input";

const setup = (secretWord="party") => {
    return shallow(<Input secretWord={secretWord}/>);
};

describe("> Input component", () => {
    it("should render without errors", () => {
        const  wrapper = setup();
        const component = findByTestAttr(wrapper, "input-component");
        expect(component.length).toBe(1)
    });

    it("should check proptypes of component", () => {
        checkProps(Input, {secretWord: ""},)
    });
});

describe("> state conbtrolled input field", () => {
    let wrapper;
    const mockSetCurrentGuess = jest.fn();

    beforeEach(function() {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        wrapper = setup();
    });

    it("should update state with value of input box", () => {
        const inputBox = findByTestAttr(wrapper, "input-box");
        const mockEvent = {target: {value: "train"}};
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
    });

    it("should clear state after clicking on submit button", () => {
        const submitBtn  = findByTestAttr(wrapper, "submit-button");
        submitBtn.simulate("click",{preventDefault(){}});

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    });
});