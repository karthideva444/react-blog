import React, { useEffect, useState } from 'react'
import './Createpost.css'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

export const Createpost = () => {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [validationError,setValidationError] = useState('')

  const navigate = useNavigate();

  const {data,error,optionsData} = useFetch('https://jsonplaceholder.typicode.com/posts',"POST")

  const handlesubmit=(e)=>{
    e.preventDefault();
    if (!title) {
      setValidationError("Title should not be empty.")
      return 
    }
    if (!content) {
      setValidationError("Content should not be empty.")
      return
    }
    setValidationError('')
    console.log({title,content,userId:1}); 
    optionsData({title,content,userId:1})
  }

  useEffect(()=>{
    if(data.length !== 0 ){
      const timer = setTimeout(()=>navigate("/"),1000)
      return ()=>clearTimeout(timer)
    }
  },[data,navigate])

  return (
    <div className='outercontainer'>
      <form onSubmit={handlesubmit}>  
        <div className='form-group'>
          <label><h6>Title:</h6></label>
          <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label><h6>Context:</h6></label>
          <textarea type="text" className='form-control' value={content} onChange={(e)=>setContent(e.target.value)}/>
        </div>
        {
          validationError && <div className='alert alert-danger' role="alert">
            {validationError}
          </div>
        }
        {
          data.length !== 0 && <div className='alert alert-success' role="alert">
          Post created successfully !!!
        </div>
        }
        {error && <div className='alert alert-danger' role="alert">
            {error}
          </div>
        }
        <div className='float-end'>
        <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  )
}
