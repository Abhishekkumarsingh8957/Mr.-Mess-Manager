import React from 'react'
import {CgProfile} from 'react-icons/cg'

import '../design/hosteldesign/profile.css'
export default function Profile({student}) {
  console.log(student)
  return (
    <div>
        <div className='profile-box'>
          <div className='profile-photo' ></div>
         <div className='profile-box-name'>{student.name}</div>
         <div className='profile-box-reg'>{student.reg}</div>
         <div className='profile-box-id'>_id<a href='#'>{"#"}</a></div>
         <br/>
         <span style={{color:'red'}}>&nbsp;Note:&nbsp;If your id is blocked then u will &nbsp;be not able to send messages</span>
        </div>
    </div>
  )
}
