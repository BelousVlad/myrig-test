import React, { Fragment, useEffect } from 'react';

import { AbstractTable } from "./AbstractTable/AbstractTable";
import { TableCell } from "./TableCell";
import { Checkbox } from "../checkbox/Checkbox";
import { Button } from "../button/Button";
import { ChangeButton } from "../button/ChangeButton";
import { DeleteButton } from "../button/DeleteButton";
import styled from 'styled-components';

import { useState } from 'react';
import { TableHead } from './TableHead';

const RemoveButtonContainer = styled.div`
    display: block;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`

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
        <TableCell>{item.id}</TableCell>
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

export function Table(props) {

    const [ selectionItems, setSelectionItems ] = useState([]);
    const [ allSelect, setAllSelect ] = useState(false);

    useEffect(() => {
        setSelectionItems(
            props.items.map((item, i) => {
                const itemIndex = selectionItems.findIndex(it => it.item === item) 
                if (itemIndex != -1)
                    return { selected: selectionItems[itemIndex].selected, item };
                return { selected: false, item }
            })
        )
    }, [ props.items ])

    const removeSelected = () => {
        // props.removeItemsAll(...selectionItems.filter(item => item.selected).map(item => item.item))
    }

    const isButtonDisabled = selectionItems.filter(item => item.selected).length === 0;

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
        ...columns,
        {
            title: '',
            render: (item, i) => (
                <TableCell>
                    <ChangeButton></ChangeButton>
                    <DeleteButton onClick={() => props.removeItemsAll(item)}></DeleteButton>
                </TableCell>
            )
        }
    ];

    return (
        <Fragment>
            <StyledTable
                items={selectionItems.map(selected => selected.item)}
                columns={table_columns}
                />
            <RemoveButtonContainer>
                <Button disabled={isButtonDisabled} onClick={removeSelected}>Удалить выбраные</Button>
            </RemoveButtonContainer>
        </Fragment>
    )
}