"use client" // This directive indicates that the code is meant to run on the client side.
import { useRef, useEffect } from 'react'; // Importing useRef and useEffect hooks from React.
import FestivalInfoCard from "@/components/festivalInfoCard/festivalInfoCard"; // Importing the FestivalInfoCard component.

export default function FestivalHighlights() { // Defining the FestivalHighlights component.
    const containerRef = useRef<HTMLDivElement>(null); // Creating a ref to access the container div.

    useEffect(() => { // Using the useEffect hook to run code after the component mounts.
        const container = containerRef.current; // Getting the current value of the container ref.
        if (!container) return; // If the container is not found, exit the effect.

        const handleScroll = () => { // Defining the handleScroll function to handle scroll events.
            const rect = container.getBoundingClientRect(); // Getting the bounding rectangle of the container.
            const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight; // Checking if the container is in view.

            if (isInView) { // If the container is in view,
                container.scrollLeft += window.scrollY; // Scroll the container horizontally based on the vertical scroll position.
                window.scrollTo(0, 0); // Reset the window's vertical scroll position to the top.
            }
        };

        window.addEventListener('scroll', handleScroll); // Adding the scroll event listener to the window.

        return () => { // Cleanup function to remove the event listener.
            window.removeEventListener('scroll', handleScroll); // Removing the scroll event listener from the window.
        };
    }, []); // Empty dependency array means this effect runs once after the initial render.

    return ( // Returning the JSX to render the component.
        <div ref={containerRef} className="w-full pr-[60px] overflow-x-scroll scrollbar-hide scroll-smooth min-w-full mt-[246px] b-purple-800 flex items-center justify-start gap-11" dir="rtl">
            {/* Container div with a ref, styles, and right-to-left text direction */}

            {/* Div for the festival title with styles */}
            <p className="font-extrabold text-4xl/[63px] min-w-[429px]">
                آنچه در هشتمین
                <span className="text-customGreen"> جشنواره </span>
                {/* Highlighted text within the title */}
                در انتظار شماست
            </p>
            {/* Subtitle text */}

            <div className="w-fit flex flex-row gap-7">
                {/* Container for the festival info cards with styles */}
                <FestivalInfoCard />
                <FestivalInfoCard />
                <FestivalInfoCard />
                <FestivalInfoCard />
                {/* Rendering multiple FestivalInfoCard components */}
            </div>
        </div>
    );
}