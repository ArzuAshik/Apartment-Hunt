import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../images/Logo.png';
import allrent from '../../../images/allrent.png';
import addrent from '../../../images/addrent.png';
import myrent from '../../../images/myrent.png';
import Myrent from '../Myrent/Myrent';
import Allrent from '../Allrent/Allrent';
import Addhouse from '../Addhouse/Addhouse';

const Sidebar = ({setDisplay}) => {
    return (
        <aside className="d-flex flex-column align-items-center py-5 px-xl-4">
            <Link to="/">
                <img width="100px" src={logo} alt="" />
            </Link>
            <ul className="mt-5">                
                <li className="btn" onClick={() => setDisplay(<Allrent />)}>
                    <img width="30px" className="mb-1 mr-2" src={allrent} alt="" />
                    <span>Booking List</span>
                </li> 
                <li className="btn" onClick={() => setDisplay(<Addhouse />)}>
                    <img width="30px" className="mb-1 mr-2" src={addrent} alt="" />
                    <span>Add House</span> 
                </li>
                <li className="btn" onClick={() => setDisplay(<Myrent />)}>
                    <img width="30px" className="mb-1 mr-2" src={myrent} alt="" />
                    <span>My Rent</span>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;