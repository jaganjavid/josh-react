import React from 'react'
import "./Model.css";
export default function Model({children, handelClose}) {
  return (
    <div className='model-backdrop'>
       <div className='model'>
           {children}
           <button onClick={handelClose}>Close</button>
       </div>
    </div>
  )
}
