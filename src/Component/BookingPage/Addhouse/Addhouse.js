import React, { useState } from 'react'
import "./Addhouse.css";

function Addhouse() {
  const [newHouse, setNewHouse] = useState({});
  
  // handling change
  function handleChange(e) {
    const optHouse = {...newHouse};
    optHouse[e.target.name] = e.target.value;
    setNewHouse(optHouse);
  } 

  // adding new house to database
  fetch('', {
    method: 'POST',
    body: JSON.stringify(newHouse)
  })
  .then(res => res.json())
  .then(data => console.log(data));
  
  return (
    <section>
      <div className="mt-3 container-fluid">
        <form className ="form">
          <h3>Add Rent House</h3>
          <div className="row">
            <div className="col mb-4">
              <label>Apartment Title</label>
              <input type="text" className="form-control" placeholder="Enter Title" name="title" onBlur={handleChange} />
            </div>
            <div className="col mb-4">
              <label>Price</label>
              <input type="number" className="form-control" placeholder="Price" name="price" onBlur={handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <label>Location</label>
              <input type="text" className="form-control" placeholder="Location" name="location" onBlur={handleChange} />
            </div>
            <div className="col mb-4">
              <label>No of Bedroom</label>
              <input type="number" className="form-control" placeholder="No of Bedroom" name="bedroom" onBlur={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <label>No of Bathroom</label>
              <input type="number" className="form-control" placeholder="No of Bathroom" name="bathroom" onBlur={handleChange} />
            </div>
            <div className="col mb-4">
              <label>Thumbnail</label>
              <input type="file" placeholder="File" name="photo" onBlur={handleChange} />
            </div>
          </div>
          <button type="button" className="btn px-3 text-white">Submit</button>
        </form>
      </div>
    </section>
  )
};

export default Addhouse;