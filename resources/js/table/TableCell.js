import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
    color: #4C4C4C;
    font-size: 14px;
    font-weight: 400;
`

export function TableCell(props) {
    return (
        <Td>{props.children}</Td>
    )
}