import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import {FaThList} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import analytics from '../Assets/analytics.png'
import student from '../Assets/students.png'
import quiz from '../Assets/quizzes.png'
import goal from '../Assets/goals.png'
import subscription from '../Assets/subscription.png'
import content from '../Assets/content.png'

const Sidebar = ({children}) =>{
    const[isOpen,setIsOpen] = useState(true);
    const toggle =() => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/analytics",
            name:"Analytics",
            icon:<img src={analytics}/>
        },
        {
            path:"/student",
            name:"Student",
            icon:<img src={student}/>
        },
        {
            path:"/goals",
            name:"Goals",
            icon:<img src={goal}/>
        },
        {
            path:"/quiz",
            name:"Quiz",
            icon:<img src={quiz}/>
        },
        {
            path:"/subscription",
            name:"Subscription",
            icon:<img src={subscription}/>
        },
        {
            path:"/content",
            name:"Content Manager",
            icon:<img src={content}/>
        },
    ]
    return(
        <div className="container">
            <div style={{width: isOpen? "300px" : "70px"}} className="sidebar">
                <div className="topSection">
                    <h1 style={{display: isOpen? "block" : "none"}} className="logo">logo</h1>
                    <div style={{marginLeft: isOpen? "110px" : "5px"}} className="bars">
                        <FaThList onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen? "block" : "none"}} className="linkText">{item.name}</div>
                        </NavLink>
                    ))
                }
                <div className="footerSection">
                        <div className="icon"><FiLogOut/></div>
                        <h3 style={{display: isOpen? "block" : "none"}} className="linkText">Log Out</h3>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;