import React ,{useEffect}from 'react'
import './Postdetail.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Appsubmitbutton } from '../../appsubmitbutton/Appsubmitbutton'

export const Postdetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  const { state :post} = location

  const {data,error,optionsData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,"DELETE")
  
  const handleEdit = ()=>{
    navigate(`/Edit/${post.id}`,{state:post})
  }
  const handleDelete = ()=>{
    optionsData()
  }
  useEffect(()=>{
    if(data.length !== 0 ){
      const timer = setTimeout(()=>navigate("/"),1000)
      return ()=>clearTimeout(timer)
    }
  },[data,navigate])

  return (
    <div className='container'>
      <div className="jumbotron">
        <h1 className="display-4">{post.title}</h1>
        <p className="lead">
          {post.body}
        </p>
        {
          data.length !== 0 && <div className='alert alert-success' role="alert">
          Post Deleted successfully !!!
        </div>
        }
        {error && <div className='alert alert-danger' role="alert">
            {error}
          </div>
        }
        <div className="float-end">
          <Appsubmitbutton title="Delete" onClick={handleDelete}></Appsubmitbutton>
          <Appsubmitbutton title="Edit" onClick={handleEdit}></Appsubmitbutton>
        </div>        
      </div>
      </div>
  )
}
