import React, { useEffect } from 'react'
import { useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/IshaShrivastava8')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <>
    <div className='bg-gray-600'>
    <div className='text-center m-4  bg-gray-900 text-white'>Github User : {data.login}</div>
    <img src={data.avatar_url} alt="Github picture" width={300}  />
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/IshaShrivastava8')
    return response.json()
}