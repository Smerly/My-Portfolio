import React, { useLayoutEffect, useState } from 'react';

export function useResize() {
    // Make useState variable for storing this
    const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight})

    // useLayoutEffect to make it so you set it onmount
    useLayoutEffect(() => {
    // add an event listener for the window.
        // if the event 'resize' happened to window, then run function to update
        // return the event listener in a callback to make sure it keeps going
        return window.addEventListener('resize', () => {
            setSize({width: window.innerWidth, height: window.innerHeight})
        })
    }, [])

  
}