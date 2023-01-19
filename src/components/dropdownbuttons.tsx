import { useState, useContext } from 'react';
import { context } from '../pages/index';

export default function DropdownButton() {
    const stateContext = useContext(context);
    return (
        <div>
            <button onClick={() => stateContext?.contextDispatch('Male')}>Male</button>
            <button onClick={() => stateContext?.contextDispatch('Female')}>Female</button>
        </div>
    )
}