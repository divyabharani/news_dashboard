import React ,{UseState}from 'react'

const UseMemo = () => {
    const [number,setNumber]=useState(0);
    const[dark,setDark]=UseState(false);
    
    const doubleNumber =slowFunction(number);

    const themeStyles={
        backgroundColor:dark?"black":"White",
        color:dark?"White":"black",
        padding:"20px",
        textAlign:"center",
        minHeight:"100vh"
    }
  return (
    <div style={themeStyles}>
        <input 
          type="number"
          value={number}
          onChange={(e) => setNumber(parseIn(e.target.value)||0)}
          />
          <button onClick={()=> setDark((curr)=>!curr)}>Toggle Theme</button>
          <div>{doubleNumber}</div>
    </div>
  );
}

export default UseMemo