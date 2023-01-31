import { useContext } from 'react';
import { context } from '../pages/index';

export default function Proficiencies() {
    const stateContext = useContext(context);
    return (
        <div>
            {Object.entries(stateContext?.contextState.Proficiencies).map(([keys, value]) => (
                <ul>
                    <button onClick={() => stateContext?.contextDispatch('inc_' + keys)}>+</button> 
                    <p>{keys} {value}</p>
                    <button onClick={() => stateContext?.contextDispatch('dec_' + keys)}>-</button>
                </ul>
            ))}
        </div>
    )
}