import React from 'react'
import { useContext } from 'react'
import { Link, Route } from 'react-router-dom'
import { ordercontex } from '../../../App'
import Sidebar from '../Sidebar/Sidebar'

function OrderMain() {



const h1= <h1>hello</h1>



    return (
        <section>
        <div className="mt-3 container-fluid row">
            <div className="col-6 col-sm-6 col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div id='ordermain' className="col-6 col-sm-6 col-md-9 d-flex justify-content-center">
   <h1 id="he">Booking List of All USer</h1>


            </div>

        </div>
    </section>
    )
}

export default OrderMain
