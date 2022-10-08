import React from 'react';
import ReactDOM from'react-dom';
import './../styles/welcome.css'
import { FaUser,FaUsers,FaLongArrowAltRight } from "react-icons/fa";

const Welcome = () => {
	return(
		<div>
            <div className='welcome'>
            <h1>Join Us!</h1>
            <p >To begin this journey, tell us what type of account would you be opening</p>
            </div>
            <button className='userbutton text'>
            <div>
            <FaUser className="polygon "></FaUser>
            </div>
           
            <div className='text'> Individual</div>             
            
            <div className='subtext'>Personal account to manage all your activities</div>
            
            </button>

            <button className='userbutton text'>
            <div>
            <FaUsers className="polygon "></FaUsers>
            </div>
           
            <div className='text'> Business</div>             
            
            <div className='subtext'>Own or belong to a company, this is for you.</div>
            
            </button>
           

            

            </div>
	)
}
        
export default Welcome;