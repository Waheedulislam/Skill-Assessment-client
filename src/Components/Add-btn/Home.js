import React from 'react';
import { Link } from 'react-router-dom';

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
                alert('Successful added')
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
                <input className='mb-1 btn btn-success' type="submit" value=" ADD Task" />
                <br />
                <Link to='/show'><button style={{ width: '200px' }} className='btn btn-primary ms-3 mb-1 mt-2'>complete</button></Link>
            </form>
        </div>
    );
};

export default Home;