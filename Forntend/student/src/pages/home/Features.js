import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import {AiOutlineComment, AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlineTask} from 'react-icons/md'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {TbReportAnalytics} from 'react-icons/tb'
import {BsCodeSlash, BsListTask} from 'react-icons/bs'
import {BiCommentDots} from 'react-icons/bi'
import img7 from"../../images/Img7.jpg";
import img9 from"../../images/Img9.jpg";
import img6 from "../../images/Img6.jpg";
// import News from '../../News'
import "./styles/feature.css";
const Features = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
  return (
    <>
    {/* <!-- console --> */}

<section className="console features" data-aos="fade-up" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img6}")`}}>
    <h1 style={{color:'#fff'}}>Features</h1>
    <div className="row_cards">
        <div className="console-col">
            <h3><AiOutlineComment style={{color:"#F15946"}}/>Real time Chat</h3>
            <p>You can chat with anyone in the FunZone technical community.</p>
           
        </div>
        
        <div className="console-col">
            <h3><MdOutlineTask style={{color:"#F15946"}}/>Task Board</h3>
            <p>A quick way to see Tasks from all your tasks in one place.</p>
           
        </div>
        
        <div className="console-col">
            <h3><HiOutlineLightBulb style={{color:"#F15946"}}/>Enroll Courses</h3>
            <p>Quickly Enroll the courses and start learning.</p>
            
        </div>
        <div className="console-col">
            <h3><TbReportAnalytics style={{color:"#F15946"}}/>Reports</h3>
            <p>Get peace of mind by submitting task.</p>
            
        </div>
    </div>
    <div className="row_cards secondrow">
        <div className="console-col">
            <h3><BiCommentDots style={{color:"#F15946"}}/>Comments</h3>
            <p>You can do comments on different tasks and give your suggestions and idea freely.</p>
           
        </div>
        
        <div className="console-col" >
            <h3><AiOutlineSchedule style={{color:"#F15946"}}/>Events</h3>
            <p>Now, you view the upcoming Events, seminars and wordshops related to Games and Digital Art.</p>
           
        </div>
        
        <div className="console-col">
            <h3><BsListTask style={{color:"#F15946"}}/>Rate Courses</h3>
            <p>You can do rating on different courses.</p>
            
        </div>
        <div className="console-col">
            <h3><BsCodeSlash style={{color:"#F15946"}}/>Source files</h3>
            <p>You can share/ upload all your work e.g. apk files, media, 3D models etc.</p>
            
        </div>
    </div>
</section>
{/* <News/> */}
{/* categories */}
<div className="cardConatiner">
    <div className="card text-center" data-aos="flip-left">
        <div style={{ backgroundImage: `url(${img7})`}} className="card_img cardImg1"></div>
        <h2 style={{color:"#E01A4F"}}>Digital Art</h2>
       
        
    </div>
    <div className="card text-center" data-aos="fade-right">
        <div style={{ backgroundImage: `url(${img9})`}} className="card_img cardImg2"></div>
        <h2 style={{color:"#E01A4F"}}>Games</h2>
       
        
    </div>
    <div className="card_txt">
       
       
        <p>Now, using this tool you can easily keep track of your Courses and collaborate with your group member (s) as well as to Trainer. You can showcase your work just on a Click!</p>
       
        
    </div>
</div>
    </>
  )
}

export default Features