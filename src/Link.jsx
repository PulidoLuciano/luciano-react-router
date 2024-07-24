function navigate(href){
    window.history.pushState({}, "", href);
    const navigationEvent = new Event("pushstate");
    window.dispatchEvent(navigationEvent);
}

export function Link({href, target, ...props}){
    const handleClick = (event) => {
        const isMainEvent = event.button == 0;
        const isModified = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
        const isManageableEvent = target === undefined || target === "_self";

        if(isMainEvent && isManageableEvent && !isModified){
            event.preventDefault();
            navigate(href);
        }
    }

    return <a onClick={handleClick} href={href} target={target} {...props}/>
}