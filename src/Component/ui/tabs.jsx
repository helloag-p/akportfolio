import * as React from "react";
import { cn } from "../../lib/utils";

const Tabs = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("tabs", className)} {...props} />
));
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("tabs-list flex", className)} {...props} />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "tabs-trigger px-4 py-2 text-sm font-medium transition-colors",
            className
        )}
        {...props}
    />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("tabs-content", className)} {...props} />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };