import React from 'react';

import { Fragment } from "react"

export function Checkbox(props) {
    return (
        <Fragment>
            <input type="checkbox" id={props.id} onClick={props.onClick}/>
            <label htmlFor={props.id}>123</label>
        </Fragment>
    )
}