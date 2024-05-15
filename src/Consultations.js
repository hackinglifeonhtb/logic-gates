import logo from './logo.svg';
import axios from 'axios'
import tafkeer from './Images/tafkeer.png'
import cpp from './Images/cpp.svg.png'
import java from './Images/java.png'
import js from './Images/js-removebg-preview.png'
import python from './Images/python-removebg-preview.png'
import ruby from './Images/ruby.png'
import './App.css'
import man1 from './Images/man1.jpg'
import man2 from './Images/man2.jpg'
import man3 from './Images/man3.jpg'
import man4 from './Images/man4.jpg'
import profile from './Images/profile.png'
import photo from './Images/photo.jpg'
import Header from './Header'
import decor_makers from './Images/decormakers1.png'
import DecorMakers from './Images/decor_makers_without_background.png'
import pinterest from './Images/pinterest.png'
import discord from './Images/discord.png'
import whatsapp from './Images/whatsapp.png'
import DecorMakers2 from './Images/DecorMakers.png'
import decor_video from './Images/decor_video.mp4'
import nice_video from './Images/nice_video.mp4'
import video1 from './Images/1.mp4'
import video2 from './Images/2.mp4'
import video3 from './Images/3.mp4'
import video4 from './Images/4.mp4'
import video5 from './Images/5.mp4'
import video6 from './Images/6.mp4'
import video7 from './Images/7.mp4'
import video8 from './Images/8.mp4'
import video9 from './Images/9.mp4'
import video10 from './Images/10.mp4'
import black_background from './Images/black_background.jpeg'
import pic from './Images/niceat33.jpg'
import LogicGates from './Images/logic-gates-removebg-preview.png'
import LogicGatesBanner from './Images/Logic Gates 2.mp4'
import trusted_1 from './Images/shield.png'
import trusted_2 from './Images/stamp.png'
import trusted_3 from './Images/trustworthiness.png'
import available from './Images/checkmark9.png'
import goverment_licence from './Images/goverment_licence.jpg'
import ExamTime from './Images/exam-time.png'
import logo_logicgates from './Images/logo_logicgates.gif';
import logicgates_tests from './Images/tests-logicgates.png'
import math from './Images/educational-book.gif'
import developer from './Images/code.png'
import layer from './Images/layers_1.png'
import react from './Images/physics.gif'
import node from './Images/programing.png'
import logicgates_customer_service from './Images/customer-service.png'
import solving_projects from './Images/solve-projects.png'
import tiktok from './Images/tiktok.png'
import instagram from './Images/instagram.png'
import twitter from './Images/twitter.png'
import youtube from './Images/youtube.png'
import facebook from './Images/facebook.png'
import mada from './Images/mada_2.png'
import vat from './Images/VAT.png'
import './Exams.css'
import './Consultations.css'
import happy from './Images/happy.gif'
import happy_1 from './Images/happy_1.gif'
import happy_2 from './Images/happy_2.gif'
import sticker from './Images/sticker.gif'
import image_uploading from './Images/interaction.gif'
import helpdesk from './Images/helpdesk.gif'
import email_gif from './Images/email.gif'
import 'bootstrap/dist/css/bootstrap.css';
//import video11 from './Images/11.mp4'
//import video12 from './Images/12.mp4'
import {React, useEffect, useState} from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Pusher from 'pusher-js';
  
  const pusher = Pusher.getInstance();

export default function Consultations() {
  const [name, setName] = useState('')
  const [keys, setKeys] = useState([])
  const [randomW, setRandomW] = useState([])
  const video1before_animation = batch(StickyIn(), FadeIn(), ZoomIn());
  const video2before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveIn(0,-200));
  const video3before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveOut(0,-200));
  const video4before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveOut(0,-200));
  const video5before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveIn(0,-200));
  const video6before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveOut(0,-200));
  const video1animation = batch(StickyIn(), FadeIn(), ZoomIn());
  const video2animation = batch(StickyIn(), FadeIn(), ZoomIn());
  const video3animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveIn(0,-200));
  const video4animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveOut(0,-200));
  const [exams, setExams] = useState([])
  useEffect(()=>{
    setRandomW([`${Math.random()*75}%`,`${Math.random()*75}%`,`${Math.random()*75}%`])
    console.log('yesddd')
    axios.post(`http://localhost:8082/api/verify`, {token: localStorage.getItem('token') || ''}, {headers:{'x-access-token':localStorage.getItem('token'), 'email':localStorage.getItem('email')}})
      .then((res)=>{
        if(res.data.firstName !== undefined && res.data.secondName !== undefined)
          setName(res.data.firstName+' '+res.data.secondName)
          console.log('explore')
          axios.post('http://localhost:8082/explore_exams_progress', {email:res.data.email})
                .then((res2)=>{
                    setExams(res2.data.exams)
                }).catch((err)=>{
                    console.log(err)
                })
      }).catch((err)=>{

      })
  },[])
  const setup = async () => {
    await pusher.init({
        apiKey: "19c2eb03ffadb575a377",
        cluster: "ap2"
      });
        
      await pusher.connect();
      await pusher.subscribe({
        channelName: "logic-gates", 
        onEvent: (event) => {
          console.log(`Event received: ${event}`);
        }
      });
  }
  useEffect(()=>{
    setup()
  },[])
  return (
    <>
          <div>
        <Header />
      </div>
    <div dir="rtl" className="container-all">
      <div>
        <div style={{
            display:'flex',
            direction:'ltr'
        }}>
            <div style={{
                width:'70%',
                height: '550px',
                borderRight:'1px solid grey'
            }}>
                <div>
                    <div style={{
                        height:'490px',
                        width:'100%',
                        direction:"rtl"
                    }}>
                        <div align="center">
                            <div style={{
                                width:'500px',
                                height:'110px',
                                boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',
                                borderRadius:'5px',
                                display:'flex',
                                alignItems:'center'
                            }}>
                                <div>
                                    <div align="center">
                                        <div style={{
                                            display:'flex'
                                        }}>
                                            <video src={LogicGatesBanner} width="120" autoplay="true" loop="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display:'flex',
                            justifyContent:'center'
                        }}>
                            <div dir="rtl" style={{
                                    width:'600px',
                                    height:'120px',
                                    boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',
                                    borderRadius:'5px',
                                    direction:'rtl',
                                    padding:'10px 20px'
                            }}>
                                
                                    <ul dir="rtl" style={{
                                        display:'block',
                                        fontSize:'13px'
                                    }}>
                                        <li>يمنع استخدام كلمات غير لبقة وعقوبته ايقاف الحساب مؤقتا</li>
                                        <li>يمنع الاساءة بكافة اشكالها للمستشارين وعقوبته ايقاف الحساب مؤقتا</li>
                                        <li>يمنع تكرار الاستشارات دون هدف محدد وعقوبته ايقاف خدمة الاستشارات مؤقتا</li>
                                        <li>يمنع التأخر في تسديد المشاريع/المتطلبات الاضافية وعقوبته ايقاف خدمة طلب المساعدات مؤقتا</li>
                                    </ul>
                            </div>
                        </div>
                        <div style={{
                            padding:'10px 20px'
                        }}>
                            <div>
                                <div style={{
                                    display:'flex'
                                }}>
                                    <img src={helpdesk} width="30px" height="30px" />
                                    <div style={{
                                        boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',
                                        width:'200px',
                                        borderRadius:'5px',
                                        padding:'10px 5px',
                                        fontSize:'12px'
                                    }}>
                                        <span>السلام عليكم ورحمة الله وبركاته</span>
                                        <br/>
                                        <span>كيف ممكن نخدمك؟</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        width:'100%',
                        height:'60px',
                        display:'flex',
                        justifyContent:'space-between',
                        direction:'rtl',
                        alignItems:'center'
                    }}>
                        <div>
                            <img src={happy_1} width="30" height="30" />
                            <img src={sticker} width="30" height="30" />
                            <img src={image_uploading} width="30" height="30" />
                        </div>
                        <input type="text" placeholder="اكتب رسالة:" dir="rtl" style={{
                            borderRadius:'7px',
                            boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',
                            padding:'10px 20px',
                            width:'600px',
                            height:'50px'
                        }} />
                        <img src={email_gif} width="50" height="50" style={{cursor:'pointer'}} />
                    </div>
                </div>
            </div>
            <div style={{
                width:'30%',
                height:'550px',
                backgroundColor:'white',
                display:'flex',
                justifyContent:'center'
            }}>
                <div>
                    <div style={{
                        height:'80px',
                        width:'300px',
                        padding:'10px 20px',
                        backgroundColor:'white',
                        borderRadius:'5px',
                        boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',
                        direction:'rtl'
                    }}>
                        <h6>#1 استشارة</h6>
                        <div style={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-between'
                        }}>
                            <div style={{
                                display:'flex'
                            }}>
                                <img src={helpdesk} width="40" />
                                <div>
                                    <h6 style={{fontSize:'12px'}}>المستشار</h6>
                                    <h6 style={{
                                        fontSize:'10px',
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        maxWidth: '150px'
                                    }}>السلام عليكم ورحمة الله وبركاته كيف حالك استاذنا الكريم</h6>
                                </div>
                            </div>
                            <div className="consultations-notifications-number">
                                1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}
