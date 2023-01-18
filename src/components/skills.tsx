import { useContext } from 'react';
import { context } from '../pages/index';

export default function Skills() {
    const stateContext = useContext(context);
    return (
        <div>
            {Object.entries(stateContext?.contextState.Skills).map(([key, value]) => (
                <ul className='skills'>
                    <button onClick={() => stateContext?.contextDispatch('inc_' + key)}>+</button> <p>{key} {value}</p>
                </ul>
            ))}
        </div>
    )
}