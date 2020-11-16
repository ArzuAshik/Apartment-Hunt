import React, { useEffect } from 'react'
import { useState } from 'react'

function OrderMain({email}) {
    const [allBooking, setAllBooking] = useState([]);

    // fetching all booking data
    useEffect(() => {
        fetch("https://apartment-hunt-server.herokuapp.com/bookings", {
            method: "POST",
            body: JSON.stringify({ ownerEmail: email }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then((response) => response.json())
        .then(bookings => setAllBooking(bookings));
    }, [email]);

    // changing status
    function statusChange(id) {
        fetch("https://apartment-hunt-server.herokuapp.com/bookings",
        {
            method: "PATCH",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                id: id,
                status: 1,
            })
        })
        .then(response => response.json())
        .then(result => console.log(result));
    }

    return (
        <section>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBooking.map(book =>
                        <tr key={book._id}>
                            <td>{book.name}</td>
                            <td>{book.phone}</td>
                            <td>{book.email}</td>
                            <td>
                                <select className="form-control" onChange={() => statusChange(book._id)} name="status">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </select>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

export default OrderMain
