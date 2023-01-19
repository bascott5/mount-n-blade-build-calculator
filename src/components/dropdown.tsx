import { useState, useContext } from 'react';
import { context } from '../pages/index';

export default function Dropdown() {
    const stateContext = useContext(context);
    const [display, setDisplay] = useState('none');

    if (display == 'none') {
        setDisplay('block')
    } else {
        setDisplay('none')
    }

    return (
        <div>
            <p>hello</p>
            <div className={display}>
                <button onClick={() => stateContext?.contextDispatch('Male')}>Male</button>
                <button onClick={() => stateContext?.contextDispatch('Female')}>Female</button>
            </div>
        </div>
    )
}