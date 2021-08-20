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

    
    &:hover {
        background: #60BE96;
    }
    &:active {
        background: #3F8D6C;
    }
    &:disabled {
        background: #C9C9C9;
    }
`

export function Button(props) {
    return (
        <StyledButton disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}