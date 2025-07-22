import React from 'react'

function Profilecard(props) {
  return (
    <div style={{border:"1px solid black", padding: "10px", margin:"10px"}}>
      <h2>{props.name}</h2>
      <p>Age:{props.ageof}</p>
      <p>bio:{props.bio}</p>
      </div>

  )
}

// proptypes validation
Profilecard.proptypes={
  
}



export default Profilecard