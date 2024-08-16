import React, { useState,useEffect } from 'react'
import './Editpost.css'
import { useFetch } from '../../hooks/useFetch'
import { useLocation,useNavigate } from 'react-router-dom'

export const Editpost = () => {
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [validationError,setValidationError] = useState('')
  const [modifiedfield,setModifiedField] = useState({})

  const navigate = useNavigate();

  const {state:post} = useLocation()

  const {data,error,optionsData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,"PATCH")

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
    console.log(modifiedfield);
    optionsData(modifiedfield) 
  }

  useEffect(()=>{
    setTitle(post.title)
    setContent(post.body)
    if(data.length !== 0 ){
      const timer = setTimeout(()=>navigate("/"),3000)
      return ()=>clearTimeout(timer)
    }
  },[data,navigate,post.title,post.body])

  const onTitleChange = (e)=>{
    setTitle(e.target.value)
    setModifiedField({...modifiedfield,title:e.target.value})
  }
  const onContentChange = (e)=>{
    setContent(e.target.value)
    setModifiedField({...modifiedfield,body:e.target.value})

  }

  return (
    <div className='outercontainer'>
      <form onSubmit={handlesubmit}>  
        <div className='form-group'>
          <label><h6>Title:</h6></label>
          <input type="text" className='form-control' value={title} 
          onChange={onTitleChange}/>
        </div>
        <div className='form-group'>
          <label><h6>Context:</h6></label>
          <textarea type="text" className='form-control' value={content} 
          onChange={onContentChange}/>
        </div>
        {
          validationError && <div className='alert alert-danger' role="alert">
            {validationError}
          </div>
        }
        {
          data.length !== 0 && <div className='alert alert-success' role="alert">
          Post Edited successfully !!!
        </div>
        }
        {error && <div className='alert alert-danger' role="alert">
            {error}
          </div>
        }
        <div className='float-end'>
        <button type='submit' className='btn btn-primary'>Edit</button>
        </div>
      </form>
    </div>
  )
}
