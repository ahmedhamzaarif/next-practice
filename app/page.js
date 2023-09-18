"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [user, setuser] = useState("Hamza")
  const [Images, setImages] = useState([])
  useEffect(() => {
    getImages()
  }, [])
  
  const getImages = async () => {
    try{
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      setImages(data)
      console.log(Images)
    } catch (err){
      console.error("Error Fetching Images")
    }
  }
  return (
    <div className='container m-auto'>
      <h1 className='text-4xl mb-5'>Salam {user}</h1>
      {/* <button onClick={getImages} className='bg-green-500 text-white px-5 py-2 uppercase hover:bg-green-400'>Get Images</button> */}
      <div className='flex flex-wrap gap-5'>
        {Images.map((elem, i)=>{
          return <img src={elem.download_url} width="300" />
        })}
      </div>
    </div>
  )
}

export default page