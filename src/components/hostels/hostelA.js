import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiFillHome } from 'react-icons/ai';
import { AiFillCheckSquare } from "react-icons/ai";
import { BiSolidUpvote, BiSolidDownvote } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import '../../design/homepagedesign/Student.css';
import '../../design/hosteldesign/hostel.css';
import Member from './memeber';
import Messmenu from './messmenu';
import Profile from '../profile';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function HostelA() {

  const location = useLocation();
  const userData = location.state?.userData;
  const [student, setStudent] = useState({ name: "", reg: "", hostel: "" ,status:""});
  useEffect(() => {
    if (userData) {
      console.log(localStorage.getItem("userData"));
      setStudent({
        name: userData.name ,
        reg: userData.reg ,
        hostel: userData.hostel ,
        status:userData.status
      });
    }
  }, [userData]);

 
  const [upvote,Setup]=useState(0);
  const [downvote,Setdown]=useState(0);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    comment: "",
    time: null,
    sendername: student.name,
    hostel:student.hostel,
  
  });
  const automaticScroll=useRef(null);

  //  console.log(userData.status)

  const increment=()=>{
    
    Setup(upvote+1);
  }
  const decrement=()=>{
    
      
      Setdown(downvote+1);
    
   
  }

  useEffect(() => {
    
    axios.get('http://localhost:8080/comment',{ params: { hostel: student.hostel } })
      .then(response => {
       
        // console.log(response.data)
        setComments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      
}, [[student.hostel],comments]);
  

useEffect(()=>{
  automaticScroll.current?.scrollIntoView({behaviour:'smooth'});
  automaticScroll.current=null;
},[comments]);
  //  console.log(comments)

  const handleComment = (e) => {
    setNewComment({
      ...newComment,
      comment: e.target.value,
    });
  };

  const handleSend = () => {
    newComment.time = new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    
   
    axios.post('http://localhost:8080/comment', newComment)
      .then(response => {
        setComments([...comments, newComment]);
        setNewComment({
          comment: "",
          time: null,
          sendername: student.name,
          hostel:student.hostel
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div className='body-student'>
      <div className='navbar'>
        <div className='title'>{student.hostel}</div>
        <ul className='list-items'>
          <li>
            <u>Home</u>
            <AiFillHome size={25} />
          </li>
          <li>
            <u onClick={()=>{navigate('/checkcalorie',{state:{hostel:student.hostel}})}}>CheckCalorie</u>
            <FcAbout color='black' size={25} />
          </li>
          <li>
           <u onClick={()=>{navigate('/resolvecomment',{state:{hostel:student.hostel}})}}>Resolved-box</u>
           <AiFillCheckSquare size={25} color='blue'/>
          </li>
          <li onClick={() => { navigate('/');  }}>
            <u>Logout</u>
            <RiLogoutCircleFill size={25} />
          </li>
        </ul>
      </div>
      <div className='profile' onClick={showHandler}>
        <RxHamburgerMenu size={26} color='violet' />
      </div>
     
      <Popup trigger={<h3><u>Mess-menu</u></h3>} modal nested contentStyle={popUpstyle}>
        <Messmenu props={{ hostelname: student.hostel }}/>
      </Popup>
      {show && <Profile student={student}/> }
      <div className='complaint-box'>
        {comments.length > 0 && comments.map((comment, index) => (
          <div key={index}>
             <div ref={automaticScroll} />{/*for automatic scroll*/}
            <div className='comment-section'>
             
              <div className='comment-sender'>{comment.sendername} {comment.time}</div>
              {comment.comment}
              {/* <div className='vote-container'>
                <span className='vote-btn'>
                  <BiSolidUpvote className='up-btn' size={15} color='green' onClick={increment} />
                  <span className='vote-count'>{upvote}</span>
                </span>
                <div className='separator'></div>
                <span className='vote-btn'>
                  <BiSolidDownvote className='down-btn' size={15} color='red' onClick={decrement} />
                  <span className='vote-count'>{downvote}</span>
                </span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      {student.status&&<input
        className='complaint-typer'
        placeholder='Type complaint or any feedback and press Enter'
        onChange={handleComment}
        value={newComment.comment}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSend();
          }
        }}
      />}
    </div>
  );
}

const popUpstyle = {
  width: '60%',
  height: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  background: '#fff',
};

