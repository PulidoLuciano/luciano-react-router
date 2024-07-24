import { match } from "path-to-regexp";
import { useEffect, useState } from "react";

export function Router(routes = [], DefaultComponent){
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

    const routeParams = {};

    const Page = routes.find(({path}) =>{
        if(path === currentPath) return true;

        const matcherUrl = match(path, {decode: decodeURIComponent});
        const matched = matcherUrl(currentPath);
        if(!matched) return false;

        routeParams = matched.params;
        return true;
    })?.Component;
    
    return Page ? <Page routeParams={routeParams}/> : <DefaultComponent routeParams={routeParams}/>
}