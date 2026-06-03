import React from 'react'

const AppButton = ({textColor, bgColor, useBorder, type, text }) => {
  return (
    <button 
    type={type ? type : 'button'}
    style={{
        color: textColor ? textColor : 'black',
        backgroundColor: bgColor ? bgColor : 'gray',
        border: useBorder ? useBorder : '3px solid black',
       ...style.buttons
    }}
    
    
    >
        {text}

    </button>
  )
}

const style ={
    buttons: {
        padding: '12px 28px',
        // border: 'none',
        borderRadius: '5px',
        fontSize: '1em'
    }
}
export default AppButton