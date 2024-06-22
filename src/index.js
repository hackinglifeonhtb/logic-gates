import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter as Router, Navigate, useParams } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Login';
import SignUp from './SignUp';
import Courses from './Courses';
import Course from './Course'
import Lessons from './Lessons'
import Tickets from './Tickets'
import Ticket from './Ticket'
import Push_Ticket from './Push_Ticket'
import BotManaging from './BotManaging'
import Products from './Products'
import Product from './Product'
import Cart from './Cart'
import Push_Product from './Push_Product'
import Exams from './Exams'
import Exam from './Exam'
import Join_Exam from './Join_Exam'
import Results from './Results'
import Consultations from './Consultations'
import ConsultationsPage from './ConsultationsPage'
import LiveStreaming from './LiveStreaming'
import Scene from './Scene'
import Payment from './Payment'
import NotFound from './NotFound'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router basename="/">
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/bot_managing' element={<BotManaging />} />
        <Route path='/courses/:course_id' element={<Course />} />
        <Route path='/courses/:course_id/:lesson_name' element={<Lessons />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/tickets/:ticket_id' element={<Ticket />} />
        <Route path='/ticket/new_ticket' element={<Push_Ticket />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:product_id' element={<Product />} />
        <Route path='/cart/:cart_id' element={<Cart />} />
        <Route path='/push_product' element={<Push_Product />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/exam/:exam_id' element={<Exam />} />
        <Route path='/join_exam/:exam_id' element={<Join_Exam />} />
        <Route path='/exam/:exam_id/last_results' element={<Results />} />
        <Route path='/consultation/:consultation_id' element={<Navigate to={`/consultation/${consultation_id}/`} replace />} />
        <Route path='/consultations' element={<ConsultationsPage />} />
        <Route path='/live-streaming' element={<LiveStreaming />} />
        <Route path='/scene' element={<Scene />} />
        <Route path='/payment/:SubscriptionType/:PaymentToken' element={<Payment />} />
        <Route path="/courses/:course_id" element={<Navigate to={`/courses/${course_id}/`} replace />} />
        <Route path="/courses/:course_id/:lesson_name" element={<Navigate to={`/courses/${course_id}/${lesson_name}/`} replace />} />
        <Route path="/tickets/:ticket_id" element={<Navigate to={`/tickets/${ticket_id}/`} replace />} />
        <Route path="/products/:product_id" element={<Navigate to={`/products/${product_id}/`} replace />} />
        <Route path="/cart/:cart_id" element={<Navigate to={`/cart/${cart_id}/`} replace />} />
        <Route path="/exam/:exam_id" element={<Navigate to={`/exam/${exam_id}/`} replace />} />
        <Route path="/join_exam/:exam_id" element={<Navigate to={`/join_exam/${exam_id}/`} replace />} />
        <Route path="/exam/:exam_id/last_results" element={<Navigate to={`/exam/${exam_id}/last_results/`} replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  ,
  document.getElementById("root")
);

reportWebVitals();