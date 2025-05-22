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
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="flex-1 py-10 px-6 bg-[#F0F5FA]">
                <main className="flex-1 bg-white rounded-sm shadow-xl">
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}