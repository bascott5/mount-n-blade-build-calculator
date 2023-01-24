import { useState, useEffect, useRef } from 'react';

type props = {
    children: JSX.Element,
  };

export default function Dropdown({children}: props) {
    const [open, setOpen] = useState(false);
    const boxMenu = useRef(null)

    useEffect(() => {
        const closeOpenMenus = (e: any) => {
            if (boxMenu.current && open && !boxMenu.current.contains(e.target)){
              setOpen(false)
            }
        }

        document.addEventListener('mousedown', closeOpenMenus)
        return () => document.addEventListener('mousedown', closeOpenMenus)
    }, [boxMenu])

    //make terminary operator decide whether it's set to open or closed
    if (open == false) {
        return (
            <div ref={boxMenu}>
                <p onClick={() => setOpen(true)}>0</p>
            </div>
        )
    } else {
        return (
            <div ref={boxMenu} onClick={() => setOpen(false)}> 
                <div>
                    {children}
                </div>
            </div>
        )
    }
}