import { useState, useEffect, useRef } from 'react';

type props = {
    children: JSX.Element,
    title: string
  };

export default function Dropdown({children, title}: props) {
    const [open, setOpen] = useState(false);

    let menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let handler = (e: Event) => {
            if (e.target) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);
    });


    /*return (
        <div className='menuContainer'>
            <div className='menuTrigger' onClick={() => {setOpen(!open)}}>

            </div>
            <div className='dropdownMenu'>
                <h3>0</h3>
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    )*/
    if (open == false) {
        return (
            <div ref={menuRef}>
                <p onClick={() => setOpen(true)}>{title}</p>
            </div>
        )
    } else {
        return (
            <div ref={menuRef} onClick={() => setOpen(false)}> 
                <div>
                    {children}
                </div>
            </div>
        )
    }
}