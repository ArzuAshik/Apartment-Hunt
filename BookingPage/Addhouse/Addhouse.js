import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import "./Addhouse.css";
function Addhouse() {
    return (
        <section>
        <div className="mt-3 container-fluid row">
            <div className="col-6 col-sm-6 col-md-3">
                <Sidebar></Sidebar>
            </div>
           
            <div id='ordermain' className=" col-6 col-sm-6 col-md-9 d-flex justify-content-center">
        
         
            <form class ="form">

            <h3>Add Rent House</h3>
  <div class="row">
    <div class="col">
    <label for="formGroupExampleInput">Service Title</label>
      <input type="text" class="form-control" placeholder="Enter Title"/>
    </div>
    <div class="col">
    <label for="formGroupExampleInput">Price</label>
      <input type="text" class="form-control" placeholder="Price"/>
    </div>
  </div>
  <p></p>
  <div class="row">
    <div class="col">
    <label for="formGroupExampleInput">Location</label>
      <input type="text" class="form-control" placeholder="Location      "/>
    </div>
    <div class="col">
    <label for="formGroupExampleInput">No of Bedroom</label>
      <input type="text" class="form-control" placeholder="No of Bedroom"/>
    </div>
  </div>
  <p></p>
  <div class="row">
    <div class="col">
    <label for="formGroupExampleInput">No of Bathroom</label>
      <input type="text" class="form-control" placeholder="No of Bathroom "/>
    </div>
    <div class="col">
    <label for="formGroupExampleInput">Thumbnail</label>
      <input type="file" class="form-control" placeholder="File"/>
    </div>
  </div>
  <p></p>
  <button style={{background:"#275A53"}} type="button" className="btn px-3 text-white">Submit</button>
</form>

         </div>



        </div>
    </section>
    )
}

export default Addhouse
