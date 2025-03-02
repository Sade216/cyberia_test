import { useEffect, useState } from "react";

function useIsMobileHook() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
}

export default useIsMobileHook;
