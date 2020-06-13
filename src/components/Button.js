import React from 'react'

const Button = ({onClick}) => {
    return (
        <div>
            <button className='btn' onClick={onClick}>
                Get Users!
            </button>          
        </div>
    )
}

export default Button

