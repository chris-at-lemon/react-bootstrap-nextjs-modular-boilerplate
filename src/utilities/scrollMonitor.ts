import React, { useState, useEffect } from 'react';

export const scrollMonitor = () => {
    const [scrollPos, setScrollPos] = useState('scrollDefault');
    const handleScroll = () => {
        if (window.pageYOffset <= 20) {
            setScrollPos('scrollAtTop');
        } else if (window.pageYOffset > 300) {
            setScrollPos('scrollInitiated');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());
    })

    return scrollPos;
};