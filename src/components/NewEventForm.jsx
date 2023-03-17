import React, { useState } from 'react'
import "./NewEventForm.css";
const NewEventForm = ({addEvent}) => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = function(){
    setTitle("");
    setDate("");
  }

  const handleSubmit = function(e){
   e.preventDefault();

   const event = {
     title: title,
     date: date,
     id: Math.floor(Math.random() * 10000)
   }

   addEvent(event);

   resetForm();
   
  }
  return (
    <form onSubmit={handleSubmit} className='new-event-form'>
        <label>
            <span>Event Title:</span>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
            <span>Event Date:</span>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
        </label>
        <button>Submit</button>
        <p>title - {title} Date - {date}</p>
        <p onClick={resetForm}>Reset the form</p>
    </form>
  )
}

export default NewEventForm