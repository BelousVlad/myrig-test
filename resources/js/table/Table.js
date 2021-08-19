import React, { Fragment, useEffect } from 'react';

import { AbstractTable } from "./AbstractTable/AbstractTable";
import { TableCell } from "./TableCell";
import { Checkbox } from "../checkbox/Checkbox";
import { Button } from "../button/Button";
import styled from 'styled-components';

// import './Table.css';

import { useState } from 'react';
import { EmployeeService } from '../services/employee-service';
import { TableHead } from './TableHead';

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

const employeeService = new EmployeeService();

const columns = [
    { title: '№', render: (item, i) => 
        <TableCell>{i+1}</TableCell>
    },
    { title: 'ФИО', render: (item, i) => 
        <TableCell>
            {`${item.first_name} ${item.last_name}`}
        </TableCell>
    },
    { title: 'Возраст(лет)', property: 'age' },
    { title: 'Рост', property: 'height',
        render: (item, i) => {

            const m = Math.floor(item.height / 100);
            const sm = Math.floor(item.height % 100);

            return <TableCell>{m}м {sm}см</TableCell>
        }
    },
    { title: 'Вес', property: 'weight',
        render: (item, i) =>    
            <TableCell>{Math.round(item.weight)}кг</TableCell>
    },
    { title: 'Зарплата', property: 'salary',
        render: (item, i) =>    
            <TableCell>${item.salary}</TableCell>
    },  
]

export function Table() {

    const [ selectionItems, setSelectionItems ] = useState([]);

    useEffect(() => {
        employeeService.getEmployees().then((items) => {
            console.log(items)
            setSelectionItems(items.map(item => 
                ({ selected: false, item })
                ))
            }
            )
    }, [ setSelectionItems ]);

    // employeeService.deleteEmployee(2,false);

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

    const [ allSelect, setAllSelect ] = useState(false);

    const select_head_render = (column) => 
        <TableHead>
            <Checkbox
                checked={allSelect}
                onChange={() => {
                    const newAllSelected = !allSelect;
                    setAllSelect(newAllSelected)
                    setSelectionItems(selectionItems.map(item => { 
                        return { ...item, selected: newAllSelected }
                    }))
                }}
            ></Checkbox>
        </TableHead>

    const table_columns = [
        { 
            title: 'Выборка',
            render: select_render,
            renderHead: select_head_render,
        },
        ...columns
    ];

    const removeSelected = () => {
        console.log(123)
    }

    return (
        <Fragment>
            <StyledTable
                items={selectionItems.map(selected => selected.item)}
                columns={table_columns}
                />
            <Button onClick={removeSelected}>Удалить выбраные элементы</Button>
        </Fragment>
    )
}