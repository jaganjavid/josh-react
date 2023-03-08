import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Javid");

  const [showEvent, setShowEvent] = useState(true);

  const [events, setEvents] = useState([
    {title: "Hey Enjoy react learning", id: 1},
    {title: "Hey Josh How are you", id: 2},
    {title: "Hey Jagan are you web dev", id: 3},
  ])

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

  return (
    <div className="App">
        {/* <h1>My name is {name}</h1>
        <button onClick={handelClick}>Change name</button> */}
        <div>
          {showEvent && <button onClick={() => {setShowEvent(false)}}>hide Event</button>}
        </div>

        <div>
          {!showEvent && <button onClick={() => {setShowEvent(true)}}>Show Event</button>}
        </div>

        {showEvent && events.map((event) => (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => {deleteClick(event.id)}}>delete me</button>
            </div>
          ))}
    </div>
  );
}



export default App;
