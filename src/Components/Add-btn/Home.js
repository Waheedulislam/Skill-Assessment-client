import React from 'react';

const Home = () => {
    const handleTak = event => {
        event.preventDefault();
        const addTask = {
            name: event.target.name.value,
            description: event.target.description.value,
        }

        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTask)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                alert('Successful Item added')
                event.target.reset();
            })
    }
    return (
        <div className='text-center  w-50 mx-auto'>
            <h1 className='text-center text-primary'>Please Add a tasks</h1>
            <form onSubmit={handleTak}>
                <input className='mb-2' type="text" name="name" placeholder='Your Name' id="" required />
                <br />
                <input className='mb-2' type="text" name="description" placeholder='Short Description' id="" />
                <br />
                <input className='mb-2' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Home;