import "./styles/App.scss";
import React, { Component } from "react";
import BLockEvent from "./components/BLockEvent";

class App extends Component {
    render() {
        return (
            <BLockEvent>
                <h1>hello world</h1>
            </BLockEvent>
        );
    }
}

export default App;