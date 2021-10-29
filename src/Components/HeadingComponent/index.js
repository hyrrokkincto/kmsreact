import React from 'react'

const HeadingComponent = ({ name = '' }) => {
    return (
        <>
            <div className='heading-container'>
                <h5>{name}</h5>
            </div>
        </>
    )
}

export default HeadingComponent
