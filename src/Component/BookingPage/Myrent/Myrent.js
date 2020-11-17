import React, { useEffect, useState } from 'react'

function Myrent({email}) {
    const [myRent, setMyRent] = useState([]);

    // loading my rents
    useEffect(() => {
        fetch('https://apartment-hunt-server.herokuapp.com/bookings',
        {
            method: "POST",
            body: JSON.stringify({ ownerEmail: email }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(res => res.json())
        .then(data => setMyRent(data))
    }, [email])

    return (
    <section>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    myRent.map(book =>
                    <tr key={book._id}>
                        <td>{book.name}</td>
                        <td>{book.price}</td>
                        <td>{book.email}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </section>
    )
}

export default Myrent