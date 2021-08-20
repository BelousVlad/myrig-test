import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
` 
const Svg = styled.svg`
    #path { 
        transition: .2s all;
    }
    ${StyledButton}:hover & #path{
        fill: #60BE96
    }
`

export function ChangeButton(props) {
    return (
        <StyledButton>
            <Svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="path" d="M12.4142 1L14 2.58579C14.781 3.36684 14.781 4.63317 14 5.41422L4.41421 15H0V10.5858L9.58579 1C10.3668 0.218953 11.6332 0.218953 12.4142 1ZM11 2.41422L2 11.5V13H3.5L12.5858 4L11 2.41422ZM8.79289 4.08579L10.9142 6.20711L10.2071 6.91422L8.08579 4.79289L8.79289 4.08579Z" fill="#4C4C4C"/>
            </Svg>
        </StyledButton>
    )
}