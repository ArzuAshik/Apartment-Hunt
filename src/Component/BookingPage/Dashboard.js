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
            <div className="row">
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