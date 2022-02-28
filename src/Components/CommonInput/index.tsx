import React from 'react'

const CommonInput = (props) => {
    return (
        <input type={!!props.type ? props.type : 'text'}
            name={props.name}
            placeholder={`${props.placeholder} ${!!props.required ? '*' : ''}`}
            value={props.value}
            className={"commmon-input-container " + props.className}
            disabled={!!props.disabled ? true : false}
        />
    )
}

export default CommonInput
