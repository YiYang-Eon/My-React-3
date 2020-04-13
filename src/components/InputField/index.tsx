import React, {Component} from "react";

type InputFieldProps = {
    labelName: string;
    id: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type InputFieldState = {};

class InputField extends Component<InputFieldProps, InputFieldState> {
    render() {
        // 01. 简写this.props
        const { labelName, ...inputProps} = this.props
        return (
            // <> 优化前的写法
            //     <label htmlFor={this.props.id}></label>
            //     <input
            //         id={this.props.id}
            //         name={this.props.name}
            //         value={this.props.value}
            //         onChange={this.props.onChange}
            //     />
            // </>

            // 02. 优化后的写法
            <>
                <label htmlFor={inputProps.id}>{labelName}</label>
                <input {...inputProps}/>
            </>
        );
    }
}

export default InputField as React.ClassicComponentClass<InputFieldProps>;