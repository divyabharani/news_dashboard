import React from 'react'

function PreviousCount() {
  const [count,SetCount] = useState(0);
  const prevCountRef=useref(null);

  useEffect(()=>{
    preventCountRef.current=count;
  });

  return (
    <div>
      
    </div>
  )
}

export default PreviousCount