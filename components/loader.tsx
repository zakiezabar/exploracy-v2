"use client";

import React, { useEffect, useState } from "react";
import Player from "lottie-react";
import animationData from "@/public/mLoader.json";

interface LoaderProps {
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
}

const LoaderAnimation: React.FC<LoaderProps> = ({
    loop = true,
    autoplay = true,
    className,
}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
      }, []);
    
    if (!isClient) {
        return null;
    }

    return (
        <Player
            autoplay={autoplay}
            loop={loop}
            animationData={animationData}
            className={className}
            style={{ width: "128px", height: "128px" }}
        />
    );
};

export default LoaderAnimation;