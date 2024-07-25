import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import logo  from "../components/assets/Logo/pict_logo.png"
import "./adminPanel.css";
const AdminPanel = () => {
    const navigate = useNavigate(); // hook for navigation
    const user = JSON.parse(localStorage.getItem('user'));
    const [User, setUser] = useState(null); // State to store user details

    useEffect(() => {
        // Check if the user is logged in when the component mounts
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (!loggedInUser) {
            // If user is not logged in, redirect to dashboard
            navigate("/");
        } else {
            setUser(loggedInUser);
        }
    }, [navigate]);




    //retriving user details from local storage
    console.log("User:", user);



    const handleAddContentClick = () => {
        navigate("/AdminPanel/user-profile/add-content");
    };

    const handleViewContentClick = () => {
        navigate("/AdminPanel/user-profile/view-content");

    };
    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem('user');
        // Redirect to dashboard
        navigate("/");
    };
    return (
        <div className="admin-main">
            <h2 className="admin-panel">Admin Panel</h2>
            <div className="section">
                <div > <img className="profil-img" src={logo} alt="" /></div>
                <div><UserProfile user={user} />
                    <div className="button-main">
                        <div >
                            <button onClick={handleAddContentClick} className="add-content">Add Content</button>
                        </div>
                        <div>
                            <button onClick={handleViewContentClick} className="add-content">View Content</button>
                        </div>
                        <div>
                            <button onClick={handleLogout} className="add-content">Logout</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pass user details as a prop */}
            {/* <button onClick={handleNavigateToUserProfile}>User Profile</button> */}

            <Routes>
                <Route path='/AdminPanel/user-profile' element={<UserProfile user={user} />} />
            </Routes>

        </div>
    );

};
export default AdminPanel;