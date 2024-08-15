import React from 'react'
import './Home.css'
import Post from '../../components/post/Post'
import { useFetch } from '../../hooks/useFetch'

export default function Home() {

  const {data : posts,error,ispending} = useFetch("https://jsonplaceholder.typicode.com/posts")

  return (
    (<div className='container'>
      {
        posts && posts.map((post)=>{
          return <Post post={post} key={post.id}/>
        })
      }
      {
        error && <h3>{error}</h3>
      }
      {
        ispending && <h4>Loading...</h4>
      }
    </div>)
  )
}
