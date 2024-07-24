import { LazyExoticComponent } from "react";

type LazyComponent = LazyExoticComponent<() => JSX.Element>
type NormalComponent = () => JSX.Element

export interface RouteObject {
    path : string;
    component: NormalComponent | LazyComponent;
}

export declare function Link({href, target, ...props} : {href : string, target? : string, children?: React.ReactNode, className?: string}) : JSX.Element

export declare function Route({path, component} : {path : string, component : NormalComponent | LazyComponent}) : null

export declare function Router({children, routes, defaultComponent} : {children? : React.ReactNode, routes? : Array<RouteObject>, defaultComponent : NormalComponent}) : JSX.Element