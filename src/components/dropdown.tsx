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

    if (open == false) {
        return (
            <div ref={boxMenu}>
                <p onClick={() => setOpen(true)}>hello</p>
            </div>
        )
    } else {
        return (
            <div ref={boxMenu} onClick={() => setOpen(false)}> 
                hello
                <div>
                    {children}
                </div>
            </div>
        )
    }
}