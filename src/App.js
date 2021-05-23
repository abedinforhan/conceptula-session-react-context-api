
import './App.css';
import ComponentA from './ComponentA';
import CounterContextProvider from './context/CounterContextProvider';


//createContext     --- context create korbo

//useContext    --- je compoment e dorkar shei component e use korbo



function App() {
 
return (
      <CounterContextProvider>
        <div className="App">
           <h2> Conceptula session - React context api</h2>
           <ComponentA/>
           <h3> This is sibling to componentA</h3>
        </div>
      </CounterContextProvider>
    );
}

export default App;
