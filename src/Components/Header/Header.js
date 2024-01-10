import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon className='icon' icon={faPlay} />
            <h1>Sports Day</h1>
        </div>
    );
};

export default Header;