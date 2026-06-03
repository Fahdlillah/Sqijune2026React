import React from 'react'

const Students = ({name, age, isStudent}) => {
  return (
    <div>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>isStudent:{isStudent ? 'yes' : 'no'}</p>
    </div>
  )
}

export default Students