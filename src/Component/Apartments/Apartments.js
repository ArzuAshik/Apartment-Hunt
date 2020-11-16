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
        fetch('http://localhost:4000/apartment')
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
                        <div key={apartment._id} className="col-sm-6 col-md-4 mb-4">
                            <div className="card border-0">
                                <img src={apartment.img} alt="" className="card-img-top"/>
                                <h3 className="mt-4 mb-0"><b>{apartment.title}</b></h3>
                                <div className="card-body px-0">
                                    <p className="text-left ml-5"><img width="15px" src={map} alt=""/> 
                                    <span className="ml-1">{apartment.location}</span></p>
                                    <div className="d-flex justify-content-start">
                                        <p className="text-left ml-5"><img width="15px" src={bed} alt=""/> <span>{apartment.bedroom} Bedrooms</span></p>
                                        <p className="text-left ml-5"><img width="15px" src={bath} alt=""/> <span>{apartment.bathroom} Bathroom</span></p> 
                                    </div>
                                    <div className="pt-4 d-flex justify-content-around ">
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