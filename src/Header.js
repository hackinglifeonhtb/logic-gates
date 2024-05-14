import axios from 'axios'
import {React, useState, useEffect} from 'react';
import tafkeer from './Images/tafkeer.png'
import {Link} from 'react-router-dom'
import LogOut from './Images/logout.png'
import Verify from './Verify'
import DecorMakers from './Images/DecorMakers.png'
import LogicGates from './Images/logic-gates-removebg-preview.png'
import "./Header.css"
import Burger from './Burger'
import LogicGatesBanner from './Images/Logic Gates 2.mp4'

export default function Header( props ) {
    const [name, setName] = useState('')
    const [verified, setVerified] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [cart, setCart] = useState('')
    useEffect(()=>{
        axios.post(`http://localhost:8082/api/verify`, {token: localStorage.getItem('token') || ''}, {headers:{'x-access-token':localStorage.getItem('token'), 'email':localStorage.getItem('email')}})
            .then((res)=>{
                if(res.data.firstName !== undefined && res.data.secondName !== undefined)
                    setVerified(true);
                    setName(res.data.firstName+' '+res.data.secondName)
                    axios.post("http://localhost:8082/get_cart_info", {email: res.data.email})
                        .then((response)=>{
                            setCart(response.data.cart._id)
                        }).catch((err)=>{
                            console.log(err)
                        })
            }).catch((err)=>{
                console.log(window.location.href)
                window.location.replace(`http://localhost:3000/login?refer_to=${window.location.href}`)
                console.log(window.location.href)
            })
    }, [])
    return (
        <>
            <div className="header-container" style={props.style}>
            <header className="App-header" style={{
                display:'flex',
                alignItems:'center',
                direction:'rtl'
            }}>
                <div className="container" style={{direction:'rtl'}}>
                    <div style={{display:'flex'}}>
                        <video src={LogicGatesBanner} autoplay="true" loop="true" width="200"></video>
                        {/*<h1>Logic Gates</h1>*/}
                    </div>
                    <ul>
                        <Link to='/'><li>الرئيسية</li></Link>
                        <li>عنا</li>
                        <Link to='/exams'><li>اختبارات</li></Link>
                        <Link to='/tickets'><li>اسأل</li></Link>
                        <Link to={`/cart/${cart}`} disable={cart.length==0}><li>اشتراك</li></Link>
                        {!verified ?                             <Link to='/login'> <li><button style={{fontSize:'20px'}}>{verified ? name : 'تسجيل الدخول'}</button></li> </Link>
 : <></>}
                    </ul>
                    {verified ? 
                            <>
                                <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>setClicked((clicked)=>!clicked)}>
    {name}
  </a>
  <div class="dropdown-menu" style={{display:`${clicked ? 'block' : 'none'}`}} aria-labelledby="dropdownMenuLink">
    <Link class="dropdown-item" href="#">الحساب</Link>
    <Link class="dropdown-item" href="#">نسبة الانجاز</Link>
    <Link class="dropdown-item" href="#" onClick={()=>{localStorage.setItem('token','');window.location.reload()}}>تسجيل الخروج</Link>
  </div>
</div>
                            </>
                            :
                            <></>
                        }
                </div>
                {/*{verified ? <img src={LogOut} height="75px" width="100px" id="logout_pic" style={{
                    marginLeft:'25px',
                    cursor:'pointer'
                }} onClick={()=>{localStorage.setItem('token','');window.location.reload()}} /> : undefined}*/}

            </header>
            <div id="nav" style={{position:'relative', zIndex:'5000',directino:'ltr'}}>
<input type="checkbox" id="menu-toggle"/>
  <label id="trigger" for="menu-toggle"></label>
  <label id="burger" for="menu-toggle"></label>
  <ul id="menu" style={{
    overflowY:'auto'
  }}>
                        <li><Link to={`/`} disable={cart.length==0}>الصفحة الرئيسية</Link></li>
                        <li><Link to={`/products`} disable={cart.length==0}>المنتجات</Link></li>
                        <li><Link to={`/tickets`} disable={cart.length==0}>التذاكر/الأسئلة</Link></li>
                        <li><Link to={`/cart/${cart}`} disable={cart.length==0}>السلة</Link></li>
                        <li><Link to={`/cart/${cart}`} disable={cart.length==0}>عنا</Link></li>
                        {verified ? 
                            <>
                            <div class="dropdown show">
<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>setClicked((clicked)=>!clicked)}>
{name}
</a>
<div class="dropdown-menu" style={{display:`${clicked ? 'block' : 'none'}`}} aria-labelledby="dropdownMenuLink">
<Link class="dropdown-item" href="#">الحساب</Link>
<Link class="dropdown-item" href="#">نسبة الانجاز</Link>
<Link class="dropdown-item" href="#" onClick={()=>{localStorage.setItem('token','');window.location.reload()}}>تسجيل الخروج</Link>
</div>
</div>
                        </>
                            :
                            <Link to='/login'> <li><button>{verified ? name : 'تسجيل الدخول'}</button></li> </Link>
                        }
  </ul>
  </div>
  </div>
        </>
    )
}