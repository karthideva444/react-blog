import React from 'react'
import './Postdetail.css'
import { useLocation, useNavigate } from 'react-router-dom'

export const Postdetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  const { state :post} = location
  
  const handleEdit = ()=>{
    navigate(`/Edit/${post.id}`,{state:post})
  }

  return (
    <div className='container'>
      <div className="jumbotron">
        <h1 className="display-4">{post.title}</h1>
        <p className="lead">
          {post.body}
        </p>
        <div className="float-end">
          <button type='submit' className='btn btn-primary'>Delete</button>
          <div className="float-end"></div>        
          <button type='submit' className='btn btn-primary'onClick={handleEdit}>Edit</button>
        </div>        
      </div>
      </div>
  )
}
