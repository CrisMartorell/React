import React, {useState} from 'react';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.css';


const App = () => {
    const [stack, setStack] = useState("");
    
    return (
        <main className="react-calculator">
            <Result value= {stack}/>
            <Numbers onClickNumber={number =>{
                console.log("Click en number ", number)
                setStack(number)
                }}
            />

            <Functions 
                onContentClear={() =>
                    console.log("Content Clear")}
                onDelete={() =>
                    console.log("onDelete")}
            />

            <MathOperations 
                onClickOperation={operation => 
                    console.log("Operation: ", operation)
                }
                onClickEqual={equal =>
                    console.log("Equal: ", equal)
                }
            />
        </main>
    );
};

export default App;