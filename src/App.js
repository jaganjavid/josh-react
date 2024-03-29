import './App.css';
import React from 'react';
import { useState } from 'react';
// import { Title } from './components/Title';
import Model from './components/Model';
import { Events } from './components/Events';
import NewEventForm from './components/NewEventForm';

function App() {

  // const [name, setName] = useState("Javid");

  const [showEvent, setShowEvent] = useState(true);
  const [showModel, setShowModel] = useState(false)

  // const [events, setEvents] = useState([
  //   {title: "Hey Enjoy react learning", id: 1},
  //   {title: "Hey Josh How are you", id: 2},
  //   {title: "Hey Jagan are you web dev", id: 3},
  // ])

   const [events, setEvents] = useState([]);

   const addEvent = (event) => {
       setEvents((prevState) => {
        return [...prevState, event]
       })

       setShowModel(false);
   }
   

  // const handelClick = () =>{
  //   setName("Josh")
  //   console.log(name);
  // }

  // console.log(showEvent);

  const deleteClick = (id) => {
    setEvents((prevState) => {
      console.log(prevState);
      return prevState.filter((event) => (
        event.id !== id
      ))
    })
  }

  const handelClose = () => {
    setShowModel(false);
  }


  // const subTitle = "we are learning react";
  return (
    <div className="App"> 

        {/* <h1 className='heading'>Hello world</h1> */}
    
        <button onClick={() => setShowModel(true)}>Show Model</button>
        {/* <Title title="Hello How are you all" subTitle={subTitle}/> */}
        {/* <Title title="Hai How are you" subTitle="we already knew javascript"/> */}
      
        {/* <Model></Model> */}
        {showModel && <Model handelClose={handelClose} isStyleModel={false}>
            <NewEventForm addEvent={addEvent}/>
        </Model>}
        {/* <Model>
           <h3>This my Model</h3>
           <p>This is subtitle</p>
        </Model> */}

        {/* <h1>My name is {name}</h1>
        <button onClick={handelClick}>Change name</button> */}
        <div>
          {showEvent && <button onClick={() => {setShowEvent(false)}}>hide Event</button>}
        </div>

        <div>
          {!showEvent && <button onClick={() => {setShowEvent(true)}}>Show Event</button>}
        </div>

        {showEvent && <Events events={events} deleteClick={deleteClick}/>}
    </div>
  );
}



export default App;
