 import { useState } from "react";



 const App2 = ({value}) =>{



    const [ counter = 0, setCounter ] = useState( value );
    const handleAdd = () => {

        setCounter( counter + 1 )
    }

    const handleSustract = () => {

        setCounter( counter - 1)
    }

    const handleReset = () =>  {
        setCounter (value)
    }


    return (
        <>
        
        <h1>Counter </h1>
        <span> { counter }</span>
        <button onClick={ () => handleAdd() }>+ 1</button>
        <button onClick={ () => handleSustract() }>- 1</button>
        <button onClick={ () => handleReset() }>Reset</button>
        
        
        </>



    )

 }

 export default App2