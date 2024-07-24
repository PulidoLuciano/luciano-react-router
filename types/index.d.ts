import { ReactNode } from "react";

export interface RouteObject {
    path : string;
    component: ReactNode;
}

export declare function Link({href, target, ...props} : {href : string, target : string}) : ReactNode

export declare function Route({path, component} : {path : string, component : ReactNode}) : null

export declare function Router({routes, defaultComponent} : {routes : Array<RouteObject>, defaultComponent : ReactNode}) : ReactNode