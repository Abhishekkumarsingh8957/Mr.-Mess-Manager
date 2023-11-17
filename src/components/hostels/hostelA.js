import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUpvote, BiSolidDownvote } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import '../../design/homepagedesign/Student.css';
import '../../design/hosteldesign/hostel.css';
import Member from './memeber';
import Messmenu from './messmenu';
import Profile from '../profile';
import Calorie from '../calorie/calorie';
import { Link } from 'react-router-dom';

export default function HostelA() {
  const student = { name: "User", reg: 20215153, hostel: "Hostelname" };
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    comment: "",
    time: null,
    sendername: student.name,
  });

  useEffect(() => {
    axios.get('https://64bb931f7b33a35a44467b38.mockapi.io/comments')
      .then(response => {
        console.log(response);
        setComments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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

    axios.post('https://64bb931f7b33a35a44467b38.mockapi.io/comments', newComment)
      .then(response => {
        setComments([...comments, newComment]);
        setNewComment({
          comment: "",
          time: null,
          sendername: student.name,
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
            <Link to='/checkcalorie'><u>CheckCalorie</u></Link>
            <FcAbout color='black' size={25} />
          </li>
          <li onClick={() => { navigate('/'); console.log("gobck"); }}>
            <u>Logout</u>
            <RiLogoutCircleFill size={25} />
          </li>
          <li>
            <u className='profile-link'>Profile</u>
             
        
          </li>
        </ul>
      </div>
      <div className='profile' onClick={showHandler}>
        <RxHamburgerMenu size={26} color='violet' />
      </div>
     
      <Popup trigger={<h3><u>Mess-menu</u></h3>} modal nested contentStyle={popUpstyle}>
        <Messmenu />
      </Popup>
      {show ? <Profile /> : <Member />}
      <div className='complaint-box'>
        {comments.length > 0 && comments.map((comment, index) => (
          <div key={index}>
            <div className='comment-section'>
              <div className='comment-sender'>{comment.sendername} {comment.time}</div>
              {comment.comment}
              <span className='vote-btn'>
                <BiSolidUpvote className='up-btn' color='green' />&nbsp;
                <BiSolidDownvote className='down-btn' color='red' />
              </span>
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
            handleSend();
          }
        }}
      />
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

