import { useContext } from 'react';
import { context } from '../pages/index';

export default function Attributes() {
    const stateContext = useContext(context);
    return (
        <div>
            {Object.entries(stateContext?.contextState.Attributes).map(([key, value]) => (
                <ul>
                    <button onClick={() => stateContext?.contextDispatch('inc_' + key)}>+</button> 
                    <p>{key} {value}</p>
                    <button onClick={() => stateContext?.contextDispatch('dec_' + key)}>-</button>
                </ul>
            ))}
        </div>
    )
}