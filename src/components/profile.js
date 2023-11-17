import React from 'react'
import {CgProfile} from 'react-icons/cg'

import '../design/hosteldesign/profile.css'
export default function Profile() {
  return (
    <div>
        <div className='profile-box'>
          <div className='profile-photo' ></div>
         <div className='profile-box-name'>name-{"Name"}</div>
         <div className='profile-box-reg'>Reg-{"Registration"}</div>
         <div className='profile-box-id'>_id<a href='#'>{"#"}</a></div>
        </div>
    </div>
  )
}
