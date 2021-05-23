import { createContext, useState } from 'react';



export const CounterContext= createContext()   // context created

const CounterContextProvider = (props) => {
  
    const [count , setCount]=useState(0)
   const [user , setUser]=  useState(
      [
        {
      role: "admin",
      id: 3425236,
      location: "ctg"
    },
    {
      role: "user",
      id: 344345236,
      location: "dhk"
    },
    {
    role: "user",
    id: 344446,
    location: "ctg"
  },
  {
  role: "admin",
  id: 34255444236,
  location: "ctg"
}
 ])


    return (
        <CounterContext.Provider  value= {         {count , setCount, user , setUser }      }>
       {props.children}
       </CounterContext.Provider>
    );
};

export default CounterContextProvider;