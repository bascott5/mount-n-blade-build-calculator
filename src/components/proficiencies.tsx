import { useContext } from 'react';
import { context } from '../pages/index';

export default function Proficiencies() {
    const stateContext = useContext(context);
    return (
        <div>
            {Object.entries(stateContext?.contextState.Proficiencies).map(([key, value]) => (
                <ul className='proficiencies'>
                    <button onClick={() => stateContext?.contextDispatch('inc_' + key)}>+</button> <p>{key} {value}</p>
                </ul>
            ))}
        </div>
    )
}