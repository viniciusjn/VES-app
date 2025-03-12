'use client';
import React, { useEffect } from "react";

export const useScroll = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    }, []);

    return isScrolled;
};
