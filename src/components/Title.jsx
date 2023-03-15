import React from 'react'

export const Title = ({title, subTitle}) => {
  return (
    <> 
        <h1 className='title'>{title}</h1>
        <br />
        <h2 className='subtitle'>{subTitle}</h2>
    </>
  )
}
