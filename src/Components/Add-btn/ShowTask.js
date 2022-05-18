import React, { useEffect, useState } from 'react';

const ShowTask = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/item`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete ?')
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const uiDelete = items.filter(item => item._id !== id);
                    setItems(uiDelete);
                })
        }
    }
    return (

        <div className='text-center'>
            <h1 >task: {items.length}</h1>
            <div className='pt-5'>
                {
                    items.map(item => <ul key={item._id}>
                        <hr />
                        <li className='d-flex justify-content-center align-items-center'><h5 className='pt-2 pe-2'>Name:</h5> {item.name} <h5 className='pt-2 ms-3 me-2'>Description:</h5> {item.description}
                            <button onClick={() => handleDelete(item._id)} className='btn-danger ms-3'>Delete</button></li>
                        <hr />

                    </ul>)
                }
            </div>
        </div>
    );
};

export default ShowTask;