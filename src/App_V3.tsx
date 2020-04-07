import React, {Component} from 'react';
import './App.css';

type AppState = {
    firstName: string;
    lastName: string;
};

type AppProps = {};

class App extends Component<AppProps, AppState> {
    // 01.需要对state进行初始化
    state = {
        // firstName: "",
        // 03. 也可以给定默认值
        firstName: "first name",
        lastName: ""
    }
    handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void = e => {
        if (e.target) {
            alert(`User Name = ${this.state.firstName} ${this.state.lastName}`);
        }
        e.preventDefault();
    }

    // 04-2 定义该方法，将变更的新值传入
    handleFirstNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void = event => {
        this.setState({firstName: event.currentTarget.value})
    };

    handleLastNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void = event => {
        this.setState({lastName: event.currentTarget.value})
    };

    // 05. 针对上面两个方法进行抽取，加入新传人参数name
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>, name: 'firstName' | 'lastName') => void =
        (event, name) => {
        // @ts-ignore
        this.setState({[name]: event.currentTarget.value})
    };

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
                        {/*02. 初始化后，需要增加value，绑定参数*/}
                        <input
                            className="text-input"
                            value={this.state.firstName}
                            name="firstName"
                            id="first-name"
                            // 04-1. 为了保证state的值始终最新的需要更新这个值
                            // 鼠标放在上面，查看签名，然后定义一个方法
                            onChange={e => {this.handleNameChange(e,'firstName')}}
                        />
                        <label className="input-label" htmlFor="last-name">
                            Last Name :
                        </label>
                        {/*02. 初始化后，需要增加value，绑定参数*/}
                        <input
                            className="text-input"
                            value={this.state.lastName}
                            name="lastName"
                            id="last-name"
                            onChange={e => {this.handleNameChange(e,'lastName')}}
                        />
                        <button className="primary-button">submit</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default App;
