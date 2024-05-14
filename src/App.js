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
import 'bootstrap/dist/css/bootstrap.css';
//import video11 from './Images/11.mp4'
//import video12 from './Images/12.mp4'
import {React, useEffect, useState} from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
export default function App() {
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
  useEffect(()=>{
    setRandomW([`${Math.random()*75}%`,`${Math.random()*75}%`,`${Math.random()*75}%`])
    console.log('yesddd')
    axios.post(`http://localhost:8082/api/verify`, {token: localStorage.getItem('token') || ''}, {headers:{'x-access-token':localStorage.getItem('token'), 'email':localStorage.getItem('email')}})
      .then((res)=>{
        if(res.data.firstName !== undefined && res.data.secondName !== undefined)
          setName(res.data.firstName+' '+res.data.secondName)
      }).catch((err)=>{

      })
  },[])
  return (
    <div style={{
    }}>
      <div>
        <Header />
      </div>
    <div className="container-all" dir="rtl" style={{
    }}>
      <div style={{
        margin:'0px 10px',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <div className="first-div-home-page" style={{
        display: 'flex',
        justifyContent:'space-between'
        }}>
          <div>
            <h1 style={{fontSize:'26px'}}>بوابات المنطق</h1>
            <h4 style={{fontSize:'18px'}}>طريقك لانهاء مشاريعك التقنية باسرع وقت ممكن وبأفضل طريقة ممكنة</h4>
            <br/>
            <h5>الخدمات:</h5>
            <ul>
              <li>
                <h5>للخدمات التقنية العامة</h5>
              </li>
              <li>
                <h5>اختبارات ممارسة</h5>
              </li>
              <li>
                <h5>خدمات لطلاب الجامعات</h5>
              </li>
              <li>
                <h5>استفسارات</h5>
              </li>
              <li>
                <h5>بناء موقعك الخاص</h5>
              </li>
            </ul>
          </div>
          {/*<div align="center" style={{textAlign:'center'}}>
              <img src={trusted_1} width="180" />
              {
                ["القدرة على حل جميع اختبارات الممارسة","اجابات سريعة على استفساراتك","يمكنك طلب حل بعض المشاريع او المتطلبات الجامعية","الانضمام الى قناة التيليجرام"].map((feature)=>{
                  return (
                    <div style={{
                      display:'flex',
                      direction:'rtl',
                      textAlign:"center",
                      alignItems:'center'
                    }}>
                      <img src={available} width="40" />
                      <h5>{feature}</h5>
                    </div>
                  )
                })
              }
            </div>*/}
            <div align="center" style={{textAlign:'center'}}>
              <img src={trusted_2} width="100" />
              <hr/>
              <div style={{
                      display:'flex',
                      direction:'rtl',
                      textAlign:"center",
                      alignItems:'center',
                      width:'350px',
                      justifyContent:'space-around'
                    }}>
                      <img src={goverment_licence} width="25" style={{borderRadius:'50%'}} />
                      <h5 style={{fontSize:'15px'}}>رقم السجل التجاري:٩٩٨٧٧٦٥٨٩٧</h5>
              </div>
            </div>
        </div>
        <div className="premium-div">
          <div align="center" style={{textAlign:'center'}}>
              <img src={trusted_1} width="150" />
              <h1 style={{fontSize:'26px'}}>١٥ ريال سعودي/شهر</h1>
              <br/>
              {
                ["القدرة على حل جميع اختبارات الممارسة","اجابات سريعة على استفساراتك","يمكنك طلب حل بعض المشاريع او المتطلبات الجامعية","الانضمام الى قناة التيليجرام"].map((feature)=>{
                  return (
                    <div style={{
                      display:'flex',
                      direction:'rtl',
                      textAlign:"center",
                      alignItems:'center',
                      justifyContent:'space-around'
                    }}>
                      <img src={available} width="25" />
                      <h5 style={{fontSize:'15px',textAlign:'right',width:'250px'}}>{feature}</h5>
                    </div>
                  )
                })
              }
              <br/>
              <button className="premium-buy">اشتراك</button>
          </div>
        </div>
      </div>
      <br/>
      <div style={{padding:'0px 20px'}}>
          <div style={{
            display:'flex',
            justifyContent:'center'
          }}>
          <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            width:'1200px'
          }}>
            <h1 style={{color:'black !important'}} className="black-important">الاختبارات</h1>
            <button className="explore-exams-button">عرض جميع الاختبارات</button>
          </div>
          </div>
          <br/>
          <div style={{
            display:'flex',
            justifyContent:'center'
          }}>
          <div style={{
            display:'flex',
            overflowX:'scroll',
            ocverflowY:'hidden',
            flexDirection:'row',
            textAlign:'center',
            position:'relative',
            scrollbarColor:'blue',
            width:'1200px',
            justifyContent:'center'
          }}>
            {
              ["هياكل البيانات والخوارزميات","الرياضيات","برمجة المواقع الالكترونية","MERN Stack", "React.js","Node.js","Ruby on Rails","English"].map((exam)=>{
                return (
                    <a className="explore-exams-via-type-button">
                      {exam}
                    </a>
                )
              })
            }
          </div>
          </div>
          <div style={{
            display:'flex',
            justifyContent:'center'
          }}>
          <div style={{
            display:'flex',
            flexWrap:'wrap',
            alignItems:'center',
            padding:'20px',
            justifyContent:'space-between',
            width:'1200px'
          }}>
            {
              [{},{},{},{},{}].map((test)=>{
                return (
                  <div className="test-explore-div">
                    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                      <img src={ExamTime} width="150" />
                    </div>
                    <br/>
                    <h5 style={{color:'black',fontWeight:'bold',height:'54px'}} className="test-explore-div-text">برمجة المواقع الالكترونية</h5>
                    <h6 style={{height:'75px'}}>يمكنك اختبار مهاراتك في برمجة المواقع الالكترونية</h6>
                    <div style={{
                      display:'flex',
                      justifyContent:'space-around',
                      alignItems:'center'
                    }}>
                      <h5 className="blue-color">فردي: ٥ ر.س </h5>
                      <button className="test-explore-div-button">تجربة</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          </div>
      </div>
      <div className="explore-divs-container">
        <div style={{
          display:'flex',
          justifyContent:'space-around',
          flexWrap:'wrap'
        }}>
          <div style={{
            width:'700px',
            padding:'20px',
          }}>
            <div style={{
              display:'flex',
              alignItems:'center',
            }}>
              <img src={logo_logicgates} width="100" height="100" />
              <h1 style={{color:'black !important',fontWeight:'bold'}} className="great-practice-tests-text">اختبارات ممارسة ممتازة</h1>
            </div>
            <div style={{
              padding:'20px'
            }}>
              <h4>نقدم اختبارات ممتازة وبجودة عالية لاختبار مستواك في عدة مجالات تقنية</h4>
            </div>
            <div style={{
              display:'flex',
              justifyContent:'space-between'
            }}>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={developer} width="120" />
                <h4>برمجة المواقع الالكترونية</h4>
              </div>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={math} width="120" />
                <h4>الرياضيات</h4>
              </div>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={react} width="120" />
                <h4>React.js</h4>
              </div>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={node} width="120" />
                <h4>Node.js</h4>
              </div>
            </div>
            <br/>
            <div style={{
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center'
            }}>
              <h4 className="test-explore-div-button-second-text">تجربة</h4>
              <button className="test-explore-div-button-second">اشترك الآن</button>
            </div>
          </div>
          <div style={{
            width:'700px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <img src={logicgates_tests} width="700" />
          </div>
        </div>
      </div>
      <div className="explore-divs-container">
        <div style={{
          display:'flex',
          justifyContent:'space-around'
        }}>
          <div style={{
            width:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <img src={logicgates_customer_service} width="700" />
          </div>
          <div style={{
            width:'50%',
            padding:'20px',
          }}>
            <div style={{
              display:'flex',
              alignItems:'center',
            }}>
              <img src={logo_logicgates} width="100" height="100" />
              <h1 style={{color:'black !important',fontWeight:'bold'}} className="great-practice-tests-text">اجابات سريعة على استفساراتك</h1>
            </div>
            <div style={{
              padding:'20px'
            }}>
              <h4>نقدم اختبارات ممتازة وبجودة عالية لاختبار مستواك في عدة مجالات تقنية</h4>
            </div>
            <div style={{
              display:'flex',
              justifyContent:'space-between'
            }}>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={developer} width="120" />
                <h4>برمجة المواقع الالكترونية</h4>
              </div>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={math} width="120" />
                <h4>الرياضيات</h4>
              </div>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={react} width="120" />
                <h4>React.js</h4>
              </div>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={node} width="120" />
                <h4>Node.js</h4>
              </div>
            </div>
            <br/>
            <div style={{
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center'
            }}>
              <h4 className="test-explore-div-button-second-text">تجربة</h4>
              <button className="test-explore-div-button-second">اشترك الآن</button>
            </div>
          </div>
        </div>
        <div className="explore-divs-container">
        <div style={{
          display:'flex',
          justifyContent:'space-around'
        }}>
          <div style={{
            width:'50%',
            padding:'20px',
          }}>
            <div style={{
              display:'flex',
              alignItems:'center',
            }}>
              <img src={logo_logicgates} width="100" height="100" />
              <h1 style={{color:'black !important',fontWeight:'bold'}} className="great-practice-tests-text">حل بعض المشاريع او المتطلبات الجامعية</h1>
            </div>
            <div style={{
              padding:'20px'
            }}>
              <h4>نقدم اختبارات ممتازة وبجودة عالية لاختبار مستواك في عدة مجالات تقنية</h4>
            </div>
            <div style={{
              display:'flex',
              justifyContent:'space-between'
            }}>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={developer} width="120" />
                <h4>برمجة المواقع الالكترونية</h4>
              </div>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={math} width="120" />
                <h4>الرياضيات</h4>
              </div>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={react} width="120" />
                <h4>React.js</h4>
              </div>
              <div align="center" style={{
                width:'200px'
              }}>
                <img src={node} width="120" />
                <h4>Node.js</h4>
              </div>
            </div>
            <br/>
            <div style={{
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center'
            }}>
              <h4 className="test-explore-div-button-second-text">تجربة</h4>
              <button className="test-explore-div-button-second">اشترك الآن</button>
            </div>
          </div>
          <div style={{
            width:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <img src={solving_projects} width="700" />
          </div>
        </div>
      </div>
      </div>
      <footer style={{
        display:'flex',
        flexWrap:'wrap',
        backgroundColor:'white'
      }}>
        <div style={{
          width:'729.6px'
        }}>
          <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <video src={LogicGatesBanner} autoplay="true" loop="true" width="400"></video>
            <div style={{
              display:'flex',
              flexWrap:'wrap'
            }}>
              <img src={tiktok} width="40" height="40" />
              <img src={twitter} width="40" height="40" />
              <img src={facebook} width="40" height="40" />
              <img src={youtube} width="40" height="40" />
              <img src={instagram} width="40" height="40" />
            </div>
          </div>
          <div style={{
            padding:'10px 40px'
          }}>
            <p className="footer-p">أكثر من 200 دورة تدريبية احترافية في مجالات متعددة مثل : المهارات الوظيفية ، البرمجة ، الكتابة ، إدارة المشاريع ، الإلقاء ، التفاوض والإٍقناع ، التصميم وحتى لغة الإشارة ، طور مهاراتك وتعلم الآن من منصة عصارة </p>
            <br/>
            <img src={mada} width="70" />
          </div>
          <div style={{
            display:'flex',
            padding:'10px 40px',
            alignItems:'center'
          }}>
            <img src={vat} height="60px" />
            <div>
              <h5>رقم السجل التجاري:٩٤٣٩٠٤٣٩٠</h5>
              <h5>الرقم الضريبي: ٩٨٧٦٥٤٦٧٨٩٨٧٦</h5>
            </div>
          </div>
          <div style={{
            padding:'10px 40px',
          }} className="color-blue">
            <h4>مؤسسة بوابات المنطق للخدمات التقنية جميع الحقوق محفوظة © ٢٠٢٤</h4>
          </div>
        </div>
        <div style={{
          width:'25%'
        }}>
        </div>
        <div style={{
          width:'25%'
        }}>

        </div>
      </footer>
    </div>
    </div>
  );
}
