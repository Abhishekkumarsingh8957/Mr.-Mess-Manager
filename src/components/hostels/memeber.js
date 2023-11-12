import React from 'react';
import '../../design/hosteldesign/member.css';
import { BsFillFilePersonFill} from 'react-icons/bs';

export default function Member() {
  const members = ["Member1", "Member2", "Member1", "Member2", "Member1", "Member2", "Member1", "Member2", "Member1", "Member2",
    "Member1", "Member2", "Member1", "Member2"];

  return (
    <div>
        
      <div className='Member-box'>
        
        {
          members.map((member, index) => (
            <div key={index} className='nth-member'><BsFillFilePersonFill/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{member}</div>
          ))
        }
      </div>
    </div>
  );
}
