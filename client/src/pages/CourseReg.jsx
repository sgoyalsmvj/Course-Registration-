import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CourseReg = () => {
    useEffect(()=>{
      axios.get('/coursereg').then((res)=>{
        console.log(res.data);
      })
    },[])
  return (
    <div>
      <form action="/coursereg" method='post'>

      </form>
    </div>
  )
}

export default CourseReg