import React from 'react'

const Button = ({onClick}) => {
    return (
            <button className='btn' onClick={onClick}>
                Get Users!
            </button>          
    )
}

export default Button

