import React from "react";
import {shallow} from "enzyme";
import {findByTestAttr, checkProps} from "../../test-utils/testUtil";
import LanguagePicker from "./LanguagePicker";

const mockSetupLanguage = jest.fn();

const setup = () => {
    return shallow(<LanguagePicker setLanguage={mockSetupLanguage}/>)
};

it("should render without errors", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-lang-picker");
    expect(component.exists()).toBe(true);
});

it("should render props without errors", () => {
    checkProps(LanguagePicker, {setLanguage: mockSetupLanguage})
});

it("should render language icons", () => {
    const wrapper = setup();
    const icons = findByTestAttr(wrapper, "language-icon");
    expect(icons.length).toBeGreaterThan(0);
});

it("should call setLanguage prop on icon click", () => {
    const wrapper = setup();
    const icons = findByTestAttr(wrapper, "language-icon");
    const firstIcon = icons.first();

    firstIcon.simulate("click");
    expect(mockSetupLanguage).toHaveBeenCalled();
}); 