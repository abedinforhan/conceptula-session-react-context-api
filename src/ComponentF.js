import React, { useContext } from 'react';
import { CounterContext } from './context/CounterContextProvider';


const ComponentF = () => {

 const {count , setCount}= useContext(CounterContext)

    return (
        <div>
            <h2> This is final component</h2>
            <p> count : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment </button>
        </div>
    );
};

export default ComponentF;