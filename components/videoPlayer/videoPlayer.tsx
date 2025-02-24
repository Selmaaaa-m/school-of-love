"use client" // This directive indicates that the component should be rendered on the client side.

import React, { useRef, useEffect, useState } from 'react'; // Import necessary hooks from React.
import ReactPlayer from 'react-player'; // Import the ReactPlayer component from the react-player package.
import styles from './videoPlayer.module.css'; // Import the CSS module.

export default function VideoPlayer() { // Define the VideoPlayer component.
    const videoRef = useRef<HTMLDivElement>(null); // Create a ref to access the video container DOM element.
    const [isFullscreen, setIsFullscreen] = useState(false); // State to track if the video is in fullscreen mode.
    const [isSticky, setIsSticky] = useState(false); // State to track if the video is in sticky mode.
    const [hasMounted, setHasMounted] = useState(false); // State to track if the component has mounted.

    useEffect(() => {
        setHasMounted(true); // Set hasMounted to true when the component mounts.
        console.log("i am mounted");
        
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts.

    useEffect(() => {
        if (!hasMounted) return; // If the component hasn't mounted, do nothing.

        const observer = new IntersectionObserver( // Create a new Intersection Observer.
            ([entry]) => {
                if (entry.intersectionRatio === 1) { // If the video is fully visible.
                    setIsFullscreen(true); // Set isFullscreen to true.
                } else {
                    setIsFullscreen(false); // Otherwise, set isFullscreen to false.
                }
            },
            { threshold: 1.0 } // Set the threshold to 1.0, meaning the callback will be triggered when the video is fully visible.
        );

        if (videoRef.current) { // If the videoRef is set.
            observer.observe(videoRef.current); // Start observing the video container.
            console.log(videoRef.current);
            console.log(observer.observe(videoRef.current));
            
            
        }

        return () => {
            if (videoRef.current) { // If the videoRef is set.
                observer.unobserve(videoRef.current); // Stop observing the video container.
            }
        };
    }, [hasMounted]); // Run this effect when hasMounted changes.

    useEffect(() => {
        if (!hasMounted) return; // If the component hasn't mounted, do nothing.

        const handleScroll = () => { // Define a function to handle scroll events.
            if (window.scrollY > window.innerHeight / 2) { // If the user has scrolled past half the window height.
                setIsSticky(true); // Set isSticky to true.
            } else {
                setIsSticky(false); // Otherwise, set isSticky to false.
            }
        };

        window.addEventListener('scroll', handleScroll); // Add the scroll event listener.

        return () => {
            window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener when the component unmounts.
        };
    }, [hasMounted]); // Run this effect when hasMounted changes.

    if (!hasMounted) { // If the component hasn't mounted.
        return null; // Return null to render nothing.
    }

    return (
        <div
            ref={videoRef} // Attach the videoRef to this div.
            // className={`${styles.videoContainer} ${isFullscreen ? styles.fullscreen : ''} ${isSticky ? styles.sticky : ''}`} // Apply classes based on state.
        >
            <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Set the video URL.
                controls // Enable video controls.
                width="100%" // Set the width to 100% of the container.
                height="100%" // Set the height to 100% of the container.
            />
        </div>
    );
}