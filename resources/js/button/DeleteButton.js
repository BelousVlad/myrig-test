import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    .ovals {
        display: none;
        right: 5%;
        bottom: -3px;
    }
    &:hover .ovals {
        display: unset;
    }
` 
const Svg = styled.svg`
    #path { 
        transition: .2s all;
    }
    ${StyledButton}:hover & #path{
        fill: #60BE96
    }
`

const anim = (props) => keyframes`
    0% {
        opacity: ${props.opacityStart};
        transform: translate(-50%, -50%) scale(0);
    }
    100% {
        opacity: ${props.opacityEnd};
        transform: translate(-50%, -50%) scale(1.5) ;
    }
    90% {
        opacity: ${props.opacityEnd};
        transform: translate(-50%, -50%) scale(1.5);
    }
`;
const Oval = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #FF6464;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${props => anim(props)} 2s linear infinite;
    animation-delay: ${props => props.delay || 0}s;
`;

const anim1 = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.3);
    }
`;

const OvalContainer = styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
`

export function DeleteButton(props) {
    return (
        <StyledButton onClick={props.onClick}>
            <Svg width="20" height="22" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="path" d="M3 5V13C3 13.5523 3.44772 14 4 14H10C10.5523 14 11 13.5523 11 13V5H13V13C13 14.6569 11.6569 16 10 16H4C2.34315 16 1 14.6569 1 13V5H3ZM6 5V13H5V5H6ZM9 5V13H8V5H9ZM8.38197 0C9.13951 0 9.83204 0.428005 10.1708 1.10557L10.618 2H14V4H9.38197L8.38197 2H5.61803L4.61803 4H0V2H3.38197L3.82918 1.10557C4.16796 0.428005 4.86049 0 5.61803 0H8.38197Z" fill="#4C4C4C"/>
            </Svg>
            <OvalContainer className="ovals">
                <Oval opacityStart={1} opacityEnd={0} delay={0}></Oval>
                <Oval opacityStart={1} opacityEnd={0} delay={.7}></Oval>
                <Oval opacityStart={1} opacityEnd={0} delay={1.4}></Oval>
            </OvalContainer>
        </StyledButton>
    )

}