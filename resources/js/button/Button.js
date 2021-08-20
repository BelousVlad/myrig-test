import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 15px 24px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    border-radius: 4px;
    background: #55A985;
    transition: .2s all;
    border: none;
    outline: none;

    box-shadow: 0px 6px 24px -12px rgba(0, 128, 73, 0.54);
    
    &:hover {
        background: #60BE96;
        box-shadow: 0px 12px 36px -12px rgba(0, 128, 73, 0.54);
    }
    &:active {
        background: #3F8D6C;
        box-shadow: 0px 6px 24px -12px rgba(0, 128, 73, 0.54);
    }
    &:disabled {
        background: #C9C9C9;
        box-shadow: none;
    }
`

export function Button(props) {
    return (
        <StyledButton disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}