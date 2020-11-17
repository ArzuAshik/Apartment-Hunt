import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Myrent({ email }) {
    const [myRent, setMyRent] = useState([]);

    // loading my rents
    useEffect(() => {
        fetch('https://apartment-hunt-server.herokuapp.com/my-bookings',
        {
            method: "POST",
            body: JSON.stringify({ email: email }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(res => res.json())
        .then(data => setMyRent(data))
    }, [email])

    console.log(myRent)
    return (
    <section>
        <table className="table text-center">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">House</th>
                    <th scope="col">Price</th>
                    <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    myRent.map(book =>
                    <tr key={book._id}>
                        <td>{book.name}</td>
                        <td>{book.houseName}</td>
                        <td>{book.price}</td>
                        <td>
                            <Link to={`apartment/${book.houseId}`} className="btn btn-info">View Details</Link>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </section>
    )
}

export default Myrent