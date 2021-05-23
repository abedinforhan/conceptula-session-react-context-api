import React from 'react';
import ComponentC from './ComponentC';

const ComponentB = () => {


    // const [count , setcount] = useContext(CounterContext)



    return (
        <div>
            <h2> this is component B</h2> 
            {/* <p> count : {count}</p> */}
            <ComponentC />
        </div>
    );
};

export default ComponentB;