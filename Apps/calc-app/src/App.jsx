import React from 'react';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.css';


const App = () => {

    return (<main className="react-calculator">
        <Result value= {undefined}/>
        <Numbers onClickNumber={number =>
            console.log("Click en number ", number)}
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
    </main>);
};

export default App;