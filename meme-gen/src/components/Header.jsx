import React from 'react';
import HeaderStyle from './Header.css'

const Header = () => {
    return(
       <div className='nav'>
        <div className='nav-left'>
            <img src='../public/images/trollface.png' width='75px'/>
            <h2>Meme Generator</h2>
        </div>
        <div className='nav-right'>
            <h3>React Course - Project 3</h3>
        </div>
       </div>
    )
}

export default Header