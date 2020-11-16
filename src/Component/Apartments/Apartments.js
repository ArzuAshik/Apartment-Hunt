import React from 'react';
import './Apartments.css';
import house1 from '../../images/house1.png';
import bed from '../../images/bed.png';
import bath from '../../images/bath.png';
import map from '../../images/map.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Apartments = () => {
    const [allAparts, setAllAparts] = useState([]);

    // fetching all apartment data
    useEffect(() => {
        fetch('https://apartment-hunt-server.herokuapp.com/apartment')
        .then(res => res.json())
        .then(data => setAllAparts(data))
    }, []);
    
    return (
        <section id="apartments" className="text-center py-5">
            <div className="container">
                <p>HOUSE RENTS</p>
                <h2><b>Discover the latest rents <br/> available today</b></h2>
                <div className="row mt-5">
                    {
                        allAparts.map(apartment =>
                        <div key={apartment._id} className="col-sm-6 col-md-6 col-lg-4 mb-4">
                            <div className="card border-0">
                                <img src={apartment.img} alt="" className="card-img-top"/>
                                <div className="card-body px-1">
                                <h3 className="my-1"><b>{apartment.title}</b></h3>
                                    <p className="m-0"><img width="15px" src={map} alt=""/> 
                                    <span className="ml-1">{apartment.location}</span></p>
                                    <div className="d-flex justify-content-around mt-4">
                                        <p><img width="15px" src={bed} alt=""/> <span>{apartment.bedroom} Bedrooms</span></p>
                                        <p><img width="15px" src={bath} alt=""/> <span>{apartment.bathroom} Bathroom</span></p> 
                                    </div>
                                    <div className="d-flex justify-content-around ">
                                        <h3 className="price"><b>${apartment.price}</b></h3>
                                        <Link className="btn px-4" to="/apartment/wash">
                                            View Details
                                        </Link>
                                    </div> 
                                </div>                  
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Apartments;