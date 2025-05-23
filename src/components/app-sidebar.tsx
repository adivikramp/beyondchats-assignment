import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { user } from "@/data/data"
import { Badge } from "./ui/badge"

export default function AppSidebar() {
    return (
        <Sidebar className="border-none w-[800px]" collapsible="icon">
            <SidebarContent className="flex justify-between h-full bg-black">
                <div className="flex flex-col h-full">
                    <SidebarTrigger className="text-white size-10 hover:bg-neutral-900 hover:text-white" />

                    <div className="group-data-[collapsible=icon]:hidden flex flex-col items-center">
                        <div className="flex flex-col gap-y-6 mt-16 text-white">
                            <Badge
                                variant="outline"
                                className="flex border-2 text-white border-white rounded-full px-6 py-2 gap-x-3"
                            >
                                <span className="w-4 h-4 bg-purple-100 rounded-full"></span>
                                <span className="text-lg font-semibold">For Agents</span>
                            </Badge>
                            <h1 className="text-6xl">AI Copilot</h1>
                        </div>
                    </div>
                </div>

                <SidebarFooter className="w-full">
                    <NavUser user={user} />
                </SidebarFooter>
                <SidebarRail />
            </SidebarContent>
        </Sidebar>
    )
}
