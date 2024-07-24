export interface RouteObject {
    path : string;
    component: () => JSX.Element;
}
export declare function Link({href, target, ...props} : {href : string, target? : string, children?: React.ReactNode, className?: string}) : JSX.Element

export declare function Route({path, component} : {path : string, component : () => JSX.Element}) : null

export declare function Router({children, routes, defaultComponent} : {children? : React.ReactNode, routes? : Array<RouteObject>, defaultComponent : () => JSX.Element}) : JSX.Element