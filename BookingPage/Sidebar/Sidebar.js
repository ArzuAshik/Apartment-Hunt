  
import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment,faHome,faPlus,faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({order ,review,service}) => {


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <Link to="/" >
         <img  style={{height:"60px",width:"150px"}} className='mb-5 ' src={logo} alt=""/>
         </Link>
                <li>
                    <Link to="/booking" >
                        <FontAwesomeIcon className='icon ' icon={faShoppingCart} /> <span onClick={order} >Booking List</span> 
                    </Link>
                </li> 
                <li>
                    <Link to="/addhouse">
                        <FontAwesomeIcon className='icon' icon={faPlus} /> <span onClick={service} >Add House</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/myrent" >
                        <FontAwesomeIcon className='icon' icon={faHome} /> <span onClick={review}>My Rent</span>
                    </Link>
                </li>
             
            </ul>
          
        </div>
    );
};

export default Sidebar;