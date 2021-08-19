import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    
`;

const CheckActive = styled.div`
    color: red;
    display: block;
    width: 16px;
    height: 16px;
    /* background: #000; */
    border: 2px solid #e8e8e8;
    border-radius: 6px;
`

const Input = styled.input`
    display: none;

    & + .checkactive {
        background: green;
    }
    &:checked + .checkactive{
        background: red;
    }
`;

export function Checkbox(props) {
    return (
        <Label>
            <Input type="checkbox" onChange={props.onChange} checked={props.checked}/>
            <CheckActive className="checkactive"></CheckActive>
        </Label>
    )
}