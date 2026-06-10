import React, { useState } from 'react'

const Showpassword = () => {
    const [showpassword, setShowpassword] = useState(false)
  return (
    <>
        <input type={showpassword ? "text" : "password"} />
    
        <button onClick={()=> setShowpassword(!showpassword)}  >{showpassword ? "hide" : "show"}</button>
    
    </>
  )
}

export default Showpassword