import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Javid")

  const [events, setEvents] = useState([
    {title: "Hey Enjoy react learning", id: 1},
    {title: "Hey Josh How are you", id: 2},
    {title: "Hey Jagan are you web dev", id: 3},
  ])

  const handelClick = () =>{
    setName("Josh")
    console.log(name);
  }

  return (
    <div className="App">
        <h1>My name is {name}</h1>
        <button onClick={handelClick}>Change name</button>

        {
          events.map((event) => (
            <div key={event.id}>
              <h2>{event.title}</h2>
            </div>
          ))
        }
    </div>
  );
}

export default App;
