import React from 'react';

import { AbstractTable } from "./AbstractTable/AbstractTable";
import { TableCell } from "./TableCell";
import { Checkbox } from "../checkbox/Checkbox";
// import './Table.css';

import { useState } from 'react';

function getItems() {
    return [
        { title: 'test', 'height': 1230},
        { title: 'test1', 'height': 1230},
        { title: 'test', 'height': 1230},
        { title: 'test', 'height': 1230},
    ]
}

export function Table() {

    const [ selectionItems, setItems ] = useState(getItems().map(item => {
        return { selected: false, item };
    }));

    return (
            <AbstractTable className="table"
            items={selectionItems.map(selected => selected.item)}
                columns={[
                    { title: 'Выборка',
                        render: (item, i) => ( 
                            <TableCell>
                                <Checkbox
                                    checked={selectionItems[i].selected}
                                    onChange={() => { 
                                        setItems((prevState) => {
                                            const state = prevState.slice();
                                            state[i].selected = !state[i].selected
                                            return state;
                                        })
                                    }
                                }
                                />
                            </TableCell>
                        )
                        
                    },
                    { title: 'Название', property: 'title'},
                    { title: 'Рост', property: 'height',
                        render: (item, i) =>    
                            (<TableCell>{item.height / 10}</TableCell>)
                    },  
                ]}
            />

    )
}