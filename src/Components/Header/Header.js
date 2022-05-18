import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/show">Task</Link>
                </li>
                {/* <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/Home">complete</Link>
                </li> */}
            </ul>
        </div>
    );
};

export default Header;