import { useState, useContext, ReactNode } from 'react';
import { context } from '../pages/index';

export default function Dropdown(children: ReactNode) {
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
                {children}
            </div>
        </div>
    )
}