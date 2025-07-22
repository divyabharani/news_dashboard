
    import React, { useEffect, useState } from 'react'
    
    function Timer() {
      const [time,setTime]=useState(new Date(). tolocaleTimeString());
      const [loggedIn,setLoggedIn]=useState(true);

      // Auto-logout afetr 10 seconds
      useEffect( () =>{
        const timeout= setTimeout(()=> {
          setLoggedIn(false);
        },10000); // 10 seconds
      
      return (
        
      )
    }
    
    export default Timer
  
