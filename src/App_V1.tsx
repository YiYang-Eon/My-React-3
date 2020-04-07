import React, {Component} from 'react';
import './App.css';

// 可以像第12行在Component中定义props和stat，但是太多的话，显示不好看，可以抽出来一个type用于定义state
type AppState = {
    firstName: string;
    lastName: string;
};

type AppProps = {};

// class App extends Component<{}, {firstName: string; lastName : string}> {
class App_V1 extends Component<AppProps, AppState> {
    handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void = e => {
        if (e.target) {
            // @ts-ignore
            const firstName = e.target["first-name"].value;
            // @ts-ignore
            const lastName = e.target["last-name"].value;
            alert(`User Name = ${firstName} ${lastName}`);
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="app">
                <header className="app-header">Yi Yang's React Demo</header>
                <main className="app-body">
                    <h2 className="body-title">Personal Info</h2>
                    <form className="input-form" onSubmit={this.handleFormSubmit}>
                        <label className="input-label" htmlFor="first-name">
                            First Name :
                        </label>
                        <input className="text-input" name="firstName" id="first_name"/>
                        <label className="input-label" htmlFor="last-name">
                            Last Name :
                        </label>
                        <input className="text-input" name="lastName" id="last_name"/>
                        <button className="primary-button">submit</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default App_V1;
