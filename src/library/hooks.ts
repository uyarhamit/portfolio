import React, { useEffect } from 'react'
import { useActiveLinkContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { links } from './data';

type activeLinkType = typeof links[number]['hash'];
export function useHooks(activeLink: activeLinkType, threshold = 0.75) {
    const { setActiveLink, timeOfLastClick } = useActiveLinkContext();
    const { ref, inView } = useInView({
        threshold
    });
    useEffect(() => {
        let timeDiff = Date.now() - timeOfLastClick;
        if (inView && timeDiff > 1000) {
            setActiveLink(activeLink);
        }
    }, [inView, timeOfLastClick]);
    return { ref, inView }
}
