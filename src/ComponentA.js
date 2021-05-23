import React from 'react';
import ComponentB from './ComponentB';


const ComponentA = () => {

   

return (
        <div className="border">
            <h2> This sis component A</h2>

            <ComponentB />
        </div>
    );
};

export default ComponentA;