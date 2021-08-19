import React, { useEffect } from 'react';

import { AbstractTable } from "./AbstractTable/AbstractTable";
import { TableCell } from "./TableCell";
import { Checkbox } from "../checkbox/Checkbox";
import styled from 'styled-components';

// import './Table.css';

import { useState } from 'react';

function getItems() {
    return fetch('http://127.0.0.1:8000/api/employees')
        .then(response => {
            if(response.ok)
            {
                return response.json()
            }
        })
        // .then(console.log)
}

const StyledTable = styled(AbstractTable)`
    width: 100%;
    border-spacing: 0;
    box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    overflow: hidden;

    th {
        text-align: left;
    }
    td,
    th {
        padding: 12px 15px;
    }
    thead {
        background: #f0f0f0;
    }
    tbody tr:nth-child(2n) {
        background: #fafafa;
    }
`;

const columns = [
    { title: '№', render: (item, i) => 
        <TableCell>{i+1}</TableCell>
    },
    { title: 'ФИО', render: (item, i) => 
        <TableCell>
            {`${item.first_name} ${item.last_name}`}
        </TableCell>
    },
    { title: 'Возраст(лет)', property: 'year' },
    { title: 'Рост', property: 'height',
        render: (item, i) =>    
            <TableCell>{item.height / 10}</TableCell>
    },
    { title: 'Вес', property: 'weight',
        render: (item, i) =>    
            <TableCell>{item.weight}</TableCell>
    },  
]

export function Table() {

    const [ selectionItems, setSelectionItems ] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/employees').then((response) => {
            getItems().then((items) => 
                setSelectionItems(items.map(item => 
                    ({ selected: false, item })
                ))
            )
        })
    }, [ setSelectionItems ]);

    const select_render = (item, i) => (
        <TableCell>
            <Checkbox
                checked={selectionItems[i].selected}
                onChange={() => { 
                    setSelectionItems((prevState) => {
                        const state = prevState.slice();
                        state[i].selected = !state[i].selected
                        return state;
                    })
                }
            }
            />
        </TableCell>
    )

    const table_columns = [
        { 
            title: 'Выборка',
            render: select_render
        },
        ...columns
    ];

    return (
            <StyledTable
                items={selectionItems.map(selected => selected.item)}
                columns={table_columns}
            />

    )
}