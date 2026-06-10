import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <>
        <h1>{count}</h1>
    
        <button onClick={()=> setCount(count + 1)} style={{backgroundColor:'crimson', padding: '10px 20px', color: 'white', border:'none'}}>increase</button>
    </>
  )
}

export default Counter