import React, {Component} from 'react';
import './App.css';
import PersonalInfoForm from "./containers/PersonalInfoForm";

class App extends Component<{},{}>{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    你好
                </header>
                <main className="App-body">
                    <h2 className="Body-title">Personal Info</h2>
                    <PersonalInfoForm/>
                </main>
            </div>
        );
    }
}

export default App;