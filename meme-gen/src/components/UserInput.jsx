import React from 'react';

const UserInput = () => {
    return(
        <div className='user-input-container'>
            <div className='meme-texts'>
                <input className='input-text-box' type='text'/>
                <input className='input-text-box' type='text'/>
            </div>
            <button className='get-image'>Get a new meme image</button>
        </div>
    )
}

export default UserInput