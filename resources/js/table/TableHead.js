import React from 'react';
import styled from 'styled-components';

const Th = styled.th`
    color: #4C4C4C;
    font-weight: 900;
`

export function TableHead(props) {
    return (
        <Th>
            {props.children}
        </Th>
    )
}