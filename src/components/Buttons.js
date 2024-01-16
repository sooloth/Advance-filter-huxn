import React from 'react'

function Buttons({onClickHandle, value, title}) {
  return (
    <button onClick={onClickHandle} value={value} className="btns">{title}</button>
  )
}

export default Buttons