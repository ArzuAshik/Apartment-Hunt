import React from 'react'
import "./Addhouse.css";

function Addhouse() {
  return (
    <section>
      <div className="mt-3 container-fluid">
        <form className ="form">
          <h3>Add Rent House</h3>
          <div className="row">
            <div className="col mb-4">
              <label for="formGroupExampleInput">Apartment Title</label>
              <input type="text" className="form-control" placeholder="Enter Title"/>
            </div>
            <div className="col mb-4">
              <label for="formGroupExampleInput">Price</label>
              <input type="number" className="form-control" placeholder="Price"/>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <label for="formGroupExampleInput">Location</label>
              <input type="text" className="form-control" placeholder="Location"/>
            </div>
            <div className="col mb-4">
              <label for="formGroupExampleInput">No of Bedroom</label>
              <input type="number" className="form-control" placeholder="No of Bedroom"/>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <label for="formGroupExampleInput">No of Bathroom</label>
              <input type="number" className="form-control" placeholder="No of Bathroom "/>
            </div>
            <div className="col mb-4">
              <label for="formGroupExampleInput">Thumbnail</label>
              <input type="file" placeholder="File"/>
            </div>
          </div>
          <button style={{background:"#275A53"}} type="button" className="btn px-3 text-white">Submit</button>
        </form>
      </div>
    </section>
  )
};

export default Addhouse;