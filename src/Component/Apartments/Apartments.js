import React from 'react';
import './Apartments.css';
import house1 from '../../images/house1.png';
import bed from '../../images/bed.png';
import bath from '../../images/bath.png';
import map from '../../images/map.png';
import { Link } from 'react-router-dom';

const Apartments = () => {
    return (
        <section id="apartments" className="text-center py-5">
            <div className="container">
                <p>HOUSE RENTS</p>
                <h2><b>Discover the latest rents <br/> available today</b></h2>
                <div className="row mt-5">
                    <div className="col-sm-6 col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={house1} alt="" className="card-img-top"/>
                            <h3 className="mt-4 mb-0"><b>Washington Avenue</b></h3>
                            <div className="card-body px-0">
                                <p className="text-left ml-5"><img width="15px" src={map} alt=""/> 
                                <span className="ml-1">Nasirabad H/S , Chittagong</span></p>
                                <div className="d-flex justify-content-start">
                                    <p className="text-left ml-5"><img width="15px" src={bed} alt=""/> <span>2 Bedrooms</span></p>
                                    <p className="text-left ml-5"><img width="15px" src={bath} alt=""/> <span>1 Bathroom</span></p> 
                                </div>
                                <div className="pt-4 d-flex justify-content-around ">
                                    <h3 className="price"><b>$195</b></h3>
                                    <Link className="btn px-4" to="/apartment/wash">
                                        View Details
                                    </Link>
                                </div> 
                            </div>                  
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={house1} alt="" className="card-img-top"/>
                            <h3 className="mt-4 mb-0"><b>Washington Avenue</b></h3>
                            <div className="card-body px-0">
                                <p className="text-left ml-5"><img width="15px" src={map} alt=""/> 
                                <span className="ml-1">Nasirabad H/S , Chittagong</span></p>
                                <div className="d-flex justify-content-start">
                                    <p className="text-left ml-5"><img width="15px" src={bed} alt=""/> <span>2 Bedrooms</span></p>
                                    <p className="text-left ml-5"><img width="15px" src={bath} alt=""/> <span>1 Bathroom</span></p> 
                                </div>
                                <div className="pt-4 d-flex justify-content-around ">
                                    <h3 className="price"><b>$195</b></h3>
                                    <Link className="btn px-4" to="/apartment/wash">
                                        View Details
                                    </Link>
                                </div> 
                            </div>                  
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={house1} alt="" className="card-img-top"/>
                            <h3 className="mt-4 mb-0"><b>Washington Avenue</b></h3>
                            <div className="card-body px-0">
                                <p className="text-left ml-5"><img width="15px" src={map} alt=""/> 
                                <span className="ml-1">Nasirabad H/S , Chittagong</span></p>
                                <div className="d-flex justify-content-start">
                                    <p className="text-left ml-5"><img width="15px" src={bed} alt=""/> <span>2 Bedrooms</span></p>
                                    <p className="text-left ml-5"><img width="15px" src={bath} alt=""/> <span>1 Bathroom</span></p> 
                                </div>
                                <div className="pt-4 d-flex justify-content-around ">
                                    <h3 className="price"><b>$195</b></h3>
                                    <Link className="btn px-4" to="/apartment/wash">
                                        View Details
                                    </Link>
                                </div> 
                            </div>                  
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={house1} alt="" className="card-img-top"/>
                            <h3 className="mt-4 mb-0"><b>Washington Avenue</b></h3>
                            <div className="card-body px-0">
                                <p className="text-left ml-5"><img width="15px" src={map} alt=""/> 
                                <span className="ml-1">Nasirabad H/S , Chittagong</span></p>
                                <div className="d-flex justify-content-start">
                                    <p className="text-left ml-5"><img width="15px" src={bed} alt=""/> <span>2 Bedrooms</span></p>
                                    <p className="text-left ml-5"><img width="15px" src={bath} alt=""/> <span>1 Bathroom</span></p> 
                                </div>
                                <div className="pt-4 d-flex justify-content-around ">
                                    <h3 className="price"><b>$195</b></h3>
                                    <Link className="btn px-4" to="/apartment/wash">
                                        View Details
                                    </Link>
                                </div> 
                            </div>                  
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={house1} alt="" className="card-img-top"/>
                            <h3 className="mt-4 mb-0"><b>Washington Avenue</b></h3>
                            <div className="card-body px-0">
                                <p className="text-left ml-5"><img width="15px" src={map} alt=""/> 
                                <span className="ml-1">Nasirabad H/S , Chittagong</span></p>
                                <div className="d-flex justify-content-start">
                                    <p className="text-left ml-5"><img width="15px" src={bed} alt=""/> <span>2 Bedrooms</span></p>
                                    <p className="text-left ml-5"><img width="15px" src={bath} alt=""/> <span>1 Bathroom</span></p> 
                                </div>
                                <div className="pt-4 d-flex justify-content-around ">
                                    <h3 className="price"><b>$195</b></h3>
                                    <Link className="btn px-4" to="/apartment/wash">
                                        View Details
                                    </Link>
                                </div> 
                            </div>                  
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mb-4">
                        <div className="card border-0">
                            <img src={house1} alt="" className="card-img-top"/>
                            <h3 className="mt-4 mb-0"><b>Washington Avenue</b></h3>
                            <div className="card-body px-0">
                                <p className="text-left ml-5"><img width="15px" src={map} alt=""/> 
                                <span className="ml-1">Nasirabad H/S , Chittagong</span></p>
                                <div className="d-flex justify-content-start">
                                    <p className="text-left ml-5"><img width="15px" src={bed} alt=""/> <span>2 Bedrooms</span></p>
                                    <p className="text-left ml-5"><img width="15px" src={bath} alt=""/> <span>1 Bathroom</span></p> 
                                </div>
                                <div className="pt-4 d-flex justify-content-around ">
                                    <h3 className="price"><b>$195</b></h3>
                                    <Link className="btn px-4" to="/apartment/wash">
                                        View Details
                                    </Link>
                                </div> 
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apartments;