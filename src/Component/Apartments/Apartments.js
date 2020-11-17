import React from 'react';
import './Apartments.css';
import bed from '../../images/bed.png';
import bath from '../../images/bath.png';
import map from '../../images/map.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchResult from './SearchResult';

const Apartments = ({ keyword }) => {
    const [allAparts, setAllAparts] = useState([]);
    const locations = allAparts.filter(apart => apart.location.toLowerCase().includes(keyword));

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
                {
                    allAparts.length === 0 &&
                    <div className="pt-5 mt-5 d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                <div className="row mt-5">
                    {
                        locations.length ? 
                        <SearchResult locations={locations} /> :
                        allAparts.map(apartment =>
                        <div key={apartment._id} className="col-sm-6 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 border-0">
                                <img src={apartment.img} alt="" className="card-img-top"/>
                                <div className="card-body px-1">
                                <h3 className="my-1"><b>{apartment.title}</b></h3>
                                    <p className="mt-3"><img width="15px" src={map} alt=""/> 
                                    <span className="ml-1">{apartment.location}</span></p>
                                    <div className="d-flex justify-content-around">
                                        <p><img width="15px" src={bed} alt=""/> <span>{apartment.bedroom} Bedrooms</span></p>
                                        <p><img width="15px" src={bath} alt=""/> <span>{apartment.bathroom} Bathroom</span></p> 
                                    </div>
                                    <div className="d-flex justify-content-around ">
                                        <h3 className="price"><b>${apartment.price}</b></h3>
                                        <Link className="btn px-4" to={`/apartment/${apartment._id}`}>
                                            View Details
                                        </Link>
                                    </div> 
                                </div>                  
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Apartments;