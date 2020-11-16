import React, { useEffect } from 'react'
import { useState } from 'react'

function OrderMain() {
    const [allBooking, setAllBooking] = useState([]);

    // fetching all booking data
    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(data => setAllBooking(data))
    }, []);

    return (
        <section>
            <h1>Booking List of All USer</h1>
        </section>
    )
}

export default OrderMain
