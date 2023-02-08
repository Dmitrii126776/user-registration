import React, {useState} from 'react';
import './App.css';
import RegistrationForm from "./RegistrationForm";
import Header from "./Header";
import Counter from "./Counter";


function App() {
    const appName = 'TypeScript Examples'
    const [counter, setCounter] = useState(0)

    const changeCounter = (value: number) => {
        setCounter(counter + value)
    }
    return (
        <div className="App">
            <Header name={appName}/>
            <h3>User Registration Form</h3>
            <RegistrationForm/>

            <Counter counter={counter} changeCounter={changeCounter}/>
        </div>
    );
}

export default App;
