import React from 'react';

type RadioInputProps = {
    id: string;
    name: string;
    value: string;
    checked: boolean;
    displayValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({displayValue, ...inputPorps}: RadioInputProps) => (
    <>
        <label htmlFor={inputPorps.id}>{displayValue}</label>
        <input type="radio" {...inputPorps}
        />
    </>
);

export default RadioInput as React.FC<RadioInputProps>;
