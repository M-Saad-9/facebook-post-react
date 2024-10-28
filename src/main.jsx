import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { HiDotsHorizontal } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";

import manDp1 from "./assets/men-dp.webp";
import manDp2 from "./assets/men1-dp.png";
import manDp3 from "./assets/men2-dp.jpg";


import car1 from "./assets/car1.jpg"
import car2 from "./assets/car2.jpg"
import car3 from "./assets/car3.jpg"

function Post(Props) {
  return(
    <div className='post-container'>
      <div className="profile-Details">
        <div className='user-detail'>
          <img src={Props.profilePhoto} alt="profile photo" id='dp'/>
          <div>
          <h1>{Props.userName}</h1>
          <p>20 Min ago</p>
          </div>
        </div>

        <HiDotsHorizontal />
      </div>
      <p className='des'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      <img src={Props.postImg} alt="Post img" className='post-img'/>
      <br /><br />
      <hr />
      <div className="like-share">
      <BiLike />
      <FaRegComments />
      <FaShare />
      </div>
    </div>
  )
}

function App() {
  return(
    <div className='posts'>
     <Post 
       profilePhoto={manDp3}
       postImg={car3}
       userName="Owais"
       />
       <Post 
       profilePhoto={manDp1}
       postImg={car2}
       userName="Saad"
       />
       <Post 
       profilePhoto={manDp2}
       postImg={car1}
       userName="Anas"
       />
            <Post 
       profilePhoto={manDp3}
       postImg={car3}
       userName="Owais"
       />
       <Post 
       profilePhoto={manDp1}
       postImg={car2}
       userName="Saad"
       />
       <Post 
       profilePhoto={manDp2}
       postImg={car1}
       userName="Anas"
       />
    </div>
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
