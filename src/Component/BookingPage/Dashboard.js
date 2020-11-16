import React, {useContext, useState} from 'react';
import { UserContext } from '../../App';
import Sidebar from './Sidebar/Sidebar';
import Allrent from './Allrent/Allrent';

const Dashboard = () => {
    const [user] = useContext(UserContext);
    const [display, setDisplay] = useState(<Allrent />);
    const height = {minHeight : '100vh'};

    return (
        <section id="dashboard">
            <nav className="bg-white p-3">
                <h4 className="text-right"><b>{user.name}</b></h4>
            </nav>
            <div className="row mx-0">
                <div className="col-12 col-lg-3">
                    <Sidebar setDisplay={setDisplay} />
                </div>
                <div style={height} className="col-12 col-lg-9 right bg-light">    
                    {display}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;