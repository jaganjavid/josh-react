import React from 'react';
import styles from "./EventList.module.css";

export const Events = ({events,deleteClick}) => {
  return (
    events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>{index}-{event.title}</h2>
          <button onClick={() => {deleteClick(event.id)}}>delete me</button>
        </div>
    ))
  )
}
