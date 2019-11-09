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