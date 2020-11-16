import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Details.css'
import sub1 from '../../images/sub1.png';
import sub2 from '../../images/sub2.png';
import sub3 from '../../images/sub3.png';
import sub4 from '../../images/sub4.png';
import { UserContext } from '../../App';

const Details = ({ id }) => {
    const { name } = useParams();
    const [user] = useContext(UserContext);
    const [apart, setApart] = useState({});
    const [book, setBook] = useState({});

    // fetching single apartment details
    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(data => setApart(data))
    }, [id]);

    // handling change
    function handleChange(e) {
        const optBook = {...book};
        optBook[e.target.name] = e.target.value;
        setBook(optBook);
    } 

    // booking apartment
    function bookApart(e) {
        e.preventDefault();
        
        fetch('', {
            method: 'POST',
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    return (
        <section id="details">
            <Navbar />
            <header id="two" className="d-flex flex-column align-items-center justify-content-center">
                <div className="title"> 
                    <h1 className="text-white my-0"><b>Apartment : {name}</b></h1> 
                </div>
            </header>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-8">
                        <img src={sub1} alt="" className="w-100" />
                        <div className="d-flex justify-content-between my-4">
                            <img className="w-25" src={sub1} alt=""/>
                            <img className="w-25" src={sub2} alt=""/>
                            <img className="w-25" src={sub3} alt=""/>
                            <img className="w-25" src={sub4} alt=""/>
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <h2><b>Washington Avenue</b></h2>
                            <h3><b>$198</b></h3>
                        </div>
                        
                        <p>300 sq-ft, 3 bedroom, Semi-furnished, Luxurious, South-facing Apartment for Rent in Rangs Malancha, Melbourne.</p>

                        <h4 className="mt-4"><b>Pricing Details -</b></h4>
                        <p>Rent/Month : $550 (negotiable)</p>
                        <p>Service Charge : 8,000/= Tk per month</p>
                        <p>Security Deposit : 3 month's rent</p>
                        <p>Flat Release Policy : 3 months earlier notice required</p>

                        <h4 className="mt-4"><b>Property Details -</b></h4>
                        <p>Address &amp; Area : Rangs Malancha, House #68, Road #6A, Dhanmondi Residential Area</p>
                        <p>Flat Size : 3000 sq-ft</p>
                        <p>Floor : A5 (5th Floor), 6 storied building, South facing unit</p>
                        <p>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining &amp; Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet</p>
                        <p>Facilities : 1 Modern Lift, All Modern Amenities &amp; Semi Furnished, Electricity with full generator, Central Gas Geyser, Car Parking with Driver's Accommodation, Community Conference Hall, Roof top Beautiful Garden and Grassy Ground, Cloth Hanging Facility with CC camera</p>
                    </div>
                    <div className="col-md-4 mt-5 mt-md-0">
                        <h3 className="text-center mb-3"><b>Book Now</b></h3>
                        <form onSubmit={bookApart} className="bg-light p-4">
                            <input onBlur={handleChange} name="name" type="text" placeholder="Name" className="form-control my-3" required />
                            <input onBlur={handleChange} name="phone" type="tel" placeholder="Phone" className="form-control my-3" required />
                            <input onBlur={handleChange} name="email" type="email" placeholder="Email" className="form-control my-3" required />
                            <textarea onBlur={handleChange} name="message" cols="30" rows="5" placeholder="Message" className="form-control my-3" required></textarea>
                            {
                                user.signed ? 
                                <button className="btn btn-block" type="submit">Request Booking</button> :
                                <Link className="btn btn-info btn-block" to="/login">Login to Book</Link>
                            }
                        </form>
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default Details;