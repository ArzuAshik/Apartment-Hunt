import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
function Myrent() {
    return (
        <section>
        <div className="mt-3 container-fluid row">
            <div className="col-6 col-sm-6 col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div id='ordermain' className="col-6 col-sm-6 col-md-9  d-flex justify-content-center">
   <h1 id="he">rent house of logged in email</h1>


            </div>

        </div>
    </section>
    )
}

export default Myrent
