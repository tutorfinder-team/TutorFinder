import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function Gradient() {
    const { images } = usePage().props;
    const [currentImage, setCurrentImage] = useState(images.gdDark);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImage((prevImage) => {
                    const imageIndex = Object.values(images).indexOf(prevImage);
                    const nextIndex = (imageIndex + 1) % Object.values(images).length;
                    setIsTransitioning(false);
                    return Object.values(images)[nextIndex];
                });
            }, 800); // Reduced to 500ms for smoother transitions
        }, 8000); // Changed to 10 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    const shouldShowImage = (image) => {
        const imgName = image.split("/").pop().split(".").shift();
        let filename = imgName.slice(-1);
        if (
            (filename === "1" && document.body.classList.contains("dark")) ||
            (filename === "0" && !document.body.classList.contains("dark"))
        ) {
            return false;
        }
        return true;
    };

    return (
        <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
            <div
                className={`w-[108rem] flex-none flex justify-end transition-opacity duration-500 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                }`}
            >
                <picture>
                    {shouldShowImage(currentImage) && (
                        <img
                            src={currentImage}
                            alt=""
                            className="w-[71.75rem] flex-none max-w-none"
                            decoding="async"
                        />
                    )}
                </picture>
                <picture>
                    {shouldShowImage(currentImage) && (
                        <img
                            src={currentImage}
                            alt=""
                            className="w-[90rem] flex-none max-w-none hidden"
                            decoding="async"
                        />
                    )}
                </picture>
            </div>
        </div>
    );
}
