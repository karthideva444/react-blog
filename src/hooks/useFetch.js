import { useEffect, useState } from "react"

export const useFetch = (url,method="GET") =>{
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [options,setOptions] = useState(null)

    const optionsData = (data) =>{
      if(method === "POST"){
        setOptions({
          method:"POST",
          body:JSON.stringify(data),
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          }
        })
      }
      else if(method === "PATCH"){
        setOptions({
          method:"PATCH",
          body:JSON.stringify(data),
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          }
        })
      }
    }

    useEffect(() => {
        const fetchPosts = async () => {
        
        setIsPending(true)
        const response = await fetch(url,{...options})
        const jsonresponse = await response.json()
    
          if (response.ok) {
            setData(jsonresponse)
            setError('')
            setIsPending(false)
          }
          if (!response.ok) {
            setError(jsonresponse.error)
            setIsPending(false)
          }
        }
        if(method === "GET"){
          fetchPosts()
        }
        else if((method === "POST" || method ==="PATCH") && options){
          fetchPosts(options)
        }
        
      }, [url,method,options])
       
      return {data,error,isPending,optionsData}
}