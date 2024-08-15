import React from 'react'
import './Postdetail.css'
import { useLocation } from 'react-router-dom'

export const Postdetail = () => {
  const location = useLocation()
  console.log(location);
  
  const { state } = location

  return (
    <div className='container'>
      <div className="jumbotron">
        <h1 className="display-4">{state.title}</h1>
        <p className="lead">
          {state.body}
        </p>
        <div className="float-end">
          <button type='submit' className='btn btn-primary'>Delete</button>
          <div className="float-end"></div>        
          <button type='submit' className='btn btn-primary'>Edit</button>
        </div>        
      </div>
      </div>
  )
}
