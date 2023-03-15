import React from 'react'

export const Events = ({events,deleteClick}) => {
  return (
    events.map((event) => (
        <React.Fragment key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => {deleteClick(event.id)}}>delete me</button>
        </React.Fragment>
    ))
  )
}
