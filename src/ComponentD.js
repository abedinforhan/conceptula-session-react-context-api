import React, { useContext, useEffect, useState } from 'react';
import ComponentE from './ComponentE';
import { CounterContext } from './context/CounterContextProvider';


const ComponentD = () => {
    const { user, setUser}=useContext(CounterContext)


    const [matchedData, setMatchedData]= useState([])

        //filter


        useEffect(()=>{
            const  filteredData= user &&  user.filter(u=> u.role== "admin")
              setMatchedData(filteredData)
       },[])
        
        return (
        <div>
            <h2> This is componemnt D</h2>
            {/* <h2> user : {user.role}  Id: {user.id} </h2> */}

            {
               matchedData &&  matchedData.map(u=> <li> {u.role}  {u.id} {u.location}</li>)

            }
            <ComponentE/>
        
        </div>
    );
};

export default ComponentD;