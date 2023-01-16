import { useContext } from 'react';
import { context } from '../pages/index';

export default function Attributes() {
    const stateContext = useContext(context);
    return(
        <div>
            {Object.entries(stateContext?.contextState.Attributes).map(([key, value]) => (<p>{key}</p>))}
            <button onClick={() => stateContext?.contextDispatch('inc_STR')}>increase</button>
        </div>
    )
}