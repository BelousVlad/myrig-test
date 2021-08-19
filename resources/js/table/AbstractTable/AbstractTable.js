import React from 'react';

import { TableHead } from "../TableHead";
import { TableCell } from "../TableCell";
import { TableItem } from "../TableItem";

// { Column
//     title: String;
//     property: String|null = null;
//     render: function(item: any, index:number|null = null): ReactElement 
// }

function renderRow(item, i, columns) {
    return (
        <TableItem key={i}>
            {
                columns.map((colum, ii) => 
                    colum.render(item, i)
                )
            }
        </TableItem>
    )
}

export function AbstractTable(props) {

    for(let column of props.columns) {
        if(!column.property)
            column.property = column.title;
        if (!column.render)
            column.render = (item, i) => 
                <TableCell key={i}>{item[column.property]}</TableCell>;
        if(!column.renderHead)
            column.renderHead = (item, i) => 
                <TableHead key={i}>{item.title}</TableHead>;
        
    }
    
    const renderRow_ = props.renderRow ?? renderRow;

    // console.log(props)

    return (
        <table  className={props.className}>
            <thead>
                <tr>
                    { props.columns.map((item, i) => 
                        item.renderHead(item, i)
                    )}
                </tr>
            </thead>
            <tbody>
                {
                    props.items.map((item,i) => renderRow_(item, i, props.columns))
                }
            </tbody>
        </table>
    )
}