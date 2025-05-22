import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { user } from "@/data/data"
import { Badge } from "./ui/badge"

export default function AppSidebar() {
    return (
        <Sidebar className="border-none w-[800px]" style={{ '--sidebar-width': '800px' } as React.CSSProperties}>
            <SidebarContent className="flex justify-between items-center h-full bg-black">
                <SidebarHeader className="flex flex-col justify-center text-white gap-y-4 mt-16">
                    <Badge variant="outline" className="flex border-2 text-white border-white rounded-full px-6 py-2 gap-x-3">
                        <span className="w-4 h-4 bg-red-800 rounded-full"></span>
                        <span className="text-lg font-semibold">For Agents</span>
                    </Badge>
                    <h1 className="text-6xl">AI Copilot</h1>
                </SidebarHeader>
                <SidebarFooter className="w-full">
                    <NavUser user={user} />
                </SidebarFooter>
                <SidebarRail />
            </SidebarContent>
        </Sidebar>
    )
}
