import React from 'react'

function ClickableButton({onButtonClick}) {
  return (
  <button onClick={()=> onButtonClick("Hello from the button!")}>
    Click Me
  </button>
  );
}

export default ClickableButton;