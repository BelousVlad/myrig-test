import React from 'react';
import styled, { keyframes } from 'styled-components';

const CheckActive = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    /* background: #000; */
    border: 2px solid #e8e8e8;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .2s all;

    svg {
        display: none;
    }

    &.checked{
        border-color:#55A985;
    }

    &.checked svg{
        display: block;
    }
`

const Input = styled.input`
    display: none;
`;

const markAnim = keyframes`
    from {
        transform: translateX(-10px) rotate(-90deg);
        opacity: 0;
    }
    to {
        transform: rotate(0deg);
        opacity: 1;
    }
`

const Svg = styled.svg`
    animation: ${markAnim} .3s forwards;
`

export function Checkbox(props) {
    return (
        <label>
            <Input type="checkbox" onChange={props.onChange} checked={props.checked}/>
            <CheckActive className={`checkactive ${props.checked && 'checked'}`}>
                <Svg className="mark" width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99999 6.19974L1.93856 3.64342L0.587114 5.11773L4.99999 8.91287L12.4129 2.11773L11.0614 0.643425L4.99999 6.19974Z" fill="#55A985"/>
                </Svg>
            </CheckActive>
        </label>
    )
}