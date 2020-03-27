import React from "react";
import "./App.css";
import TodosBoard from "./TodosBoard";

/**
 * The main app component
 * TODO: Add router
 */
const App = props => {
    return (
        <div className="App">
            <h1>Wat?</h1>
            <TodosBoard />
        </div>
    );
}


export default App;