import { useEffect, useState } from "react";

export function Router(routes = [], defaultComponent){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        
        window.addEventListener("popstate", onLocationChange);
        window.addEventListener("pushstate", onLocationChange);

        return () => {
            window.removeEventListener("popstate", onLocationChange);
            window.removeEventListener("pushstate", onLocationChange);
        }
    }, []);

    const Page = routes.find(({path}) => path === currentPath)?.Component;
}