import React from 'react';

const UserInput = () => {
    return(
        <form className='user-input-container'>
            <div className='meme-texts'>
                <input className='input-text-box' type='text' placeholder='Top Text'/>
                <input className='input-text-box' type='text' placeholder='Bottom Text'/>
            </div>
            <button className='get-image'>Get a new meme image</button>
        </form>
    )
}

export default UserInput