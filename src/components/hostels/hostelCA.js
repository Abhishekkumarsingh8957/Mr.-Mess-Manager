import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUpvote, BiSolidDownvote } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { FaEdit,FaDatabase } from "react-icons/fa";
import { RxHamburgerMenu } from 'react-icons/rx';
import '../../design/homepagedesign/Student.css';
import '../../design/hosteldesign/hostel.css';
import Member from './memeber';
import Messmenu from './messmenu';
import { AiFillCheckSquare } from "react-icons/ai";
import { useLocation } from 'react-router-dom';



export default function HostelCA() {

  const location = useLocation();
  const userData = location.state?.userData;
  console.log(location.state)
  const [warden, setWarden] = useState({ name: "", hostel: "" });
  const [ischeck,setcheck]=useState(false);
  const navigate = useNavigate();
  const [resolve,setResolve]=useState(false);
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    comment: "",
    time: null,
    sendername: warden.name,
    _id:"",
    resolved:""
  });
  const [upvote,Setup]=useState(0);
  const [downvote,Setdown]=useState(0);


  const increment=()=>{
    
    Setup(upvote+1);
  }
  const decrement=()=>{
    
      
      Setdown(downvote+1);
    
   
  }
  useEffect(() => {
    if (userData) {
      console.log(userData)
      setWarden({
        name: userData.name ,
        hostel: userData.hostel 
      });
    }
  }, [userData]);


  useEffect(() => {
    axios.get('http://localhost:8080/comment',{ params: { hostel: warden.hostel } })
      .then(response => {
       
        console.log(response.data)
        setComments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
   
    // axios.get("http://localhost:8080/resolvecomment")
    // .then((res)=>{
    //   console.log(res.data.comment)
    // })

  }, [warden.hostel]);

  const handleComment = (e) => {
    setNewComment({
      ...newComment,
      comment: e.target.value,
    });
  };

  const sendresolveStatus = (id, currentResolvedStatus) => {
    const updatedResolvedStatus = !currentResolvedStatus;
  
   
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === id ? { ...comment, resolved: updatedResolvedStatus } : comment
      )
    );
  
    axios
      .put(`http://localhost:8080/comment/${id}`, { resolved: updatedResolvedStatus })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
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
          sendername: warden.name,
          _id:"",
          resolved:""
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
        <div className='title'>{warden.hostel}</div>
        <ul className='list-items'>
          <li>
            <u>Home</u>
            <AiFillHome size={25} />
          </li>
          <li>
           <u onClick={()=>navigate('/Emessmenu')}>EditMessMenu</u>
            <FaEdit size={22}/>
          </li>
          <li>
          <u onClick={()=>navigate('/studentdata',{ state: { hostel: warden.hostel } })}>StudentData</u>
            <FaDatabase />
          </li>
          <li>
           <u onClick={()=>{navigate('/resolvecomment',{ state: { hostel: warden.hostel } })}}>Resolved-box</u>
           <AiFillCheckSquare size={22} />
          </li>
          <li onClick={() => { navigate('/'); console.log("gobck"); }}>
            <u>Logout</u>
            <RiLogoutCircleFill size={25} />
          </li>
        </ul>
      </div>
      <div className='profile'>
        <RxHamburgerMenu size={26} color='violet' />
      </div>
     
      <Popup trigger={<h3><u>Mess-menu</u></h3>} modal nested contentStyle={popUpstyle}>
        <Messmenu props={{ hostelname: warden.hostel }}/>
      </Popup>
      
      <div className='complaint-box'>
        {comments.map((comment, index) => (
          <div key={index}>
            <div className='comment-section'>
              <div className='comment-sender'> {comment.sendername} {comment.time}</div>
              {comment.comment}
              <div className='vote-container'>
              <input
                   type='checkbox'
                   id='resolve'
                   checked={comment.resolved} 
                   onChange={() => sendresolveStatus(comment._id, comment.resolved)}
                   key={index}
                 />
                 <span className='vote-btn'>
                  <BiSolidUpvote className='up-btn' size={15} color='green' onClick={increment} />
                  <span className='vote-count' key={index}>{upvote}</span>
                </span>
                <div className='separator'></div>
                <span className='vote-btn'>
                  <BiSolidDownvote className='down-btn' size={15} color='red' onClick={decrement} />
                  <span className='vote-count'>{downvote}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
       
      </div>
      <input
          className='complaint-typer'
          placeholder='Type complaint or any feedback and press Enter'
          onChange={handleComment}
          value={newComment.comment}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSend(e.key);
              e.target.value = " ";
            }
          }}
        />
        
    </div>
  );
}

const popUpstyle = {
  width: '60%',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  background: '#fff',
  overflow: 'auto', 
};

