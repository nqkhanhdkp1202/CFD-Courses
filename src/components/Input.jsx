import React from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'

const ErrorText = styled.p`
    width: 100% !important;
    padding-left: 180px;
    color: red;
   
`

const Label = styled.label`
    display: flex;
    flex-wrap: wrap;
    input{
        flex: 1
    }
`

function Input({ error, label, required, placeholder, type = 'text', ...props }, ref) {
    return (
        <>
            <Label>
                <p>{label}{required && <span>*</span>}</p>
                <input ref={ref} type={type} placeholder={placeholder} {...props} />
                {error && <ErrorText>{error}</ErrorText>}
            </Label>
        </>
    )
}


export default forwardRef(Input)