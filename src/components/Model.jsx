import React from 'react'
import "./Model.css";
export default function Model({children, handelClose, isStyleModel}) {
  return (
    <div className='model-backdrop'>
      
       <div className='model' style={
        {
          border:"4px solid",
          borderColor: isStyleModel ? "lightblue" : "red",
          // backgroundColor: "blue",
          // color:"#ffffff"
        }
       }>
           {children}
           {/* <button onClick={handelClose} className={isStyleModel ? "btn" : "btn-2"}>Close</button> */}
       </div>
    </div>
  )
}
