import React from 'react'

const Button = ({color, setColor, name}) => {
  return (
    <button 
      onClick={() => setColor(color)}
      style={{backgroundColor:color}}
      className={`px-6 py-2 shadow-2xl rounded-2xl ${color == '#F8F8FF' ? 'text-black' : 'text-white'}`}>
        {name}
    </button>
  )
}

export default Button;