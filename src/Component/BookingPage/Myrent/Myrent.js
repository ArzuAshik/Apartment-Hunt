import React, { useEffect, useState } from 'react'

function Myrent() {
    const [myRent, setMyRent] = useState([]);

    // fetching my rent data
    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(data => setMyRent(data))
    }, []);

    return (
    <section>
        <div className="mt-3 container-fluid row">
            <h2>These are my Rents</h2>
        </div>
    </section>
    )
}

export default Myrent
