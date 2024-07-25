import {React,useEffect} from 'react';
import './App.css';
import ApproveUser from './ApproveUser.js';
import Home from './components/Home';
import "./styles/Content.css";
import "./styles/Navbar.css";
import './styles/TeamMemberCard.css';
import "./styles/headerr.css";
import './styles/spinner.css';

import { Route, Routes } from "react-router-dom";
import AdminPanel from './AdminPannel/AdminPanel';
import ContentForm from './AdminPannel/ContentForm';
import Contentt from './AdminPannel/Contentt';
import EmailVerify from './AdminPannel/EmailVerify';
import ForgotPassword from './AdminPannel/ForgotPassword';
import Login from './AdminPannel/Login';
import Register from './AdminPannel/Register';
import ResetPassword from './AdminPannel/ResetPassword';
import Headerr from './components/Headerr.js';
import PdfView from './components/PdfView.js';
import TeamSection from './components/TeamSection';
const App = () => {
  useEffect(() => {
    const clearLocalStorageAfterDelay = setTimeout(() => {
      localStorage.clear();
    }, 60 * 60 * 1000); // 1 hour in milliseconds
  
    return () => clearTimeout(clearLocalStorageAfterDelay);
  }, []);
  
  return (
    <>
      <Headerr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/TeamSection' element={<TeamSection />} />
        <Route path='/AdminPanel/*' element={<AdminPanel />} />
        <Route path='/user-profile' element={<AdminPanel />} />
        <Route path='/AdminPanel/user-profile/add-content' element={<ContentForm></ContentForm>} />
        <Route path='/AdminPanel/user-profile/view-content' element={<Contentt></Contentt>} />
        <Route path='/verify/:token' element={<EmailVerify />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />
        <Route path='/approve/:token' element={<ApproveUser />} />
        <Route path='/file/:filePath' element={<PdfView />} />
      </Routes>


    </>
  )
}

export default App;
