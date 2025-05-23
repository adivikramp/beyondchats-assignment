import { Outlet } from "react-router";
import {
    SidebarProvider,
    SidebarInset
} from "@/components/ui/sidebar";
import AppSidebar from "./app-sidebar";
import { useEffect, useState } from "react";
import SkeletonLoading from "./skeleton-loading";

export default function Layout() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SkeletonLoading />;
    }

    return (
        <SidebarProvider style={{ '--sidebar-width': '800px' } as React.CSSProperties}>
            <AppSidebar />
            <SidebarInset className="flex-1 p-12 bg-purple-50 overflow-hidden">
                <main className="max-h-[800px] bg-white rounded-sm shadow-xl overflow-hidden border border-neutral-200">
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider >
    );
}