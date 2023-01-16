import { useContext } from 'react';
import { initialState, context } from '../pages/index';

export default function Background() {
    const stateContext = useContext(context);
    return(
        <div>
            {Object.entries(stateContext?.contextState.Gender).map(([key]) => (<p>{key}</p>))}
            <input type="checkbox" onChange={() => stateContext?.contextDispatch('Male')} />
            <input type="checkbox" onChange={() => stateContext?.contextDispatch('Female')} />
        </div>
    )
}