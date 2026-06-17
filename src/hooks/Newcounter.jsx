import React, {useState, useRef, useEffect} from 'react'

const Newcounter = () => {

    const [count, setCount] = useState(0);

    const previousCount = useRef(null);

    previousCount.current;

    useEffect(()=>{
        previousCount.current = count
    }, [count])

  return (
    <div>
        <h1>{count}</h1>
        <h2>previousCount: {previousCount.current}</h2>
        <button onClick={()=> setCount(count + 1)}>increase</button>
    </div>
  )
}

export default Newcounter