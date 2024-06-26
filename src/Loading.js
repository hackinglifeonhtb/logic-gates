import axios from 'axios'
import {React, useState, useEffect} from 'react';
import "./Loading.css"
// window.location.replace(`http://localhost:3000/login?refer_to=${window.location.href}`)
export default function Loading() {
    const [name, setName] = useState('')
    const [verified, setVerified] = useState(false);
    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_SSL_AVAILABILITY}://${process.env.REACT_APP_DB_SERVER_URI}/api/verify`, {token: localStorage.getItem('token') || ''}, {headers:{'x-access-token':localStorage.getItem('token'), 'email':localStorage.getItem('email')}})
            .then((res)=>{
                if(res.data.firstName !== undefined && res.data.secondName !== undefined)
                    setVerified(true);
                    setName(res.data.firstName+' '+res.data.secondName)
            }).catch((err)=>{
                console.log(window.location.href)
                window.location.replace(`${process.env.REACT_APP_SSL_AVAILABILITY}://${process.env.REACT_APP_WEBSITE_URI}/login?refer_to=${window.location.href}`)
                console.log(window.location.href)
            })
    }, [])
    return (
        <>
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        </>
    )
}