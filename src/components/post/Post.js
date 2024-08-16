import React from 'react'
import './Post.css'
import { useNavigate } from 'react-router-dom'

export default function Post({post}) {
    
    const navigate = useNavigate()    
    
    const handlepost = ()=>{
        navigate(`/post/${post.id}`,{state:post})
    }
  return (
    <div>
        <div className="card" onClick={handlepost}>
            <h5 className="card-header" >{post.title}</h5>
            <div className="card-body">
                <h5 className="card-text">{post.body}</h5>
            </div>
        </div>
    </div>
  )
}
