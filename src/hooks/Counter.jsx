// import React, { useState, useRef } from 'react'

// //useState is a function used for managing data within a component
// //useRef is a  function used to track the previous value of a state variable.

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const previousCount = useRef(null);
//     console.log(previousCount);

//     previousCount.current++;


    
//   return (
//     <>
//         <h1>{count}</h1>

//         <h2>Previous count: {previousCount.current} times</h2>
    
//         <button onClick={()=> setCount(count + 1)} style={{backgroundColor:'crimson', padding: '10px 20px', color: 'white', border:'none'}}>increase</button>
//     </>
//   )
// }

// export default Counter