import React from 'react';

const Home = () => {
    const handleTak = event => {
        event.preventDefault();
        const addTask = {
            name: event.target.name.value,
            description: event.target.description.value,
        }

        const url = `https://mighty-taiga-80971.herokuapp.com/item`;
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
        <div className='text-center' >
            <h1 className='text-success pt-4'>Please Add a tasks</h1>
            <form onSubmit={handleTak} className='w-50 mx-auto'>
                <input className='mb-2' type="text" name="name" placeholder='Your Name' id="" required />
                <br />
                <input className='mb-2' type="text" name="description" placeholder='Short Description' id="" />
                <br />
                <input className='mb-2 btn btn-primary' type="submit" value=" ADD Task" />
            </form>
        </div>
    );
};

export default Home;