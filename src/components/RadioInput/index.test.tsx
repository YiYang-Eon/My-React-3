import React from 'react';
import {render} from '@testing-library/react';
import RadioInput from "./index";

describe("test RadioInput component", () => {
    it("component should shwo init label and check status correctly", () => {
        const {getByLabelText, getByDisplayValue} = render(
            <RadioInput
                id = "TestRadioInput"
                name = "RadioInputValue"
                value = "RadioInputValue"
                displayValue = "RadioInputDisplayValue"
                checked = {false}
                onChange = {(f) => {}}
            />
        );

        const input = getByDisplayValue("RadioInputValue")
        const label = getByLabelText("RadioInputDisplayValue")

        expect(input).toBeInTheDocument();
        expect(label).toBeInTheDocument();
    });

    it("component should pass correct value when input changed", () => {
        const handleInputChange : (e: any) => void = e => {
            expect(e.currentTarget.value).toBe("TestValue");
            expect(e.currentTarget.checked).toBe(true);
        };
    })
});