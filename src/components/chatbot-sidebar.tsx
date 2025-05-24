import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Bot, ChevronsUpIcon } from "lucide-react";
import { useDeviceType } from "@/hooks/use-mobile";

const ChatbotSidebar = () => {
    const deviceType = useDeviceType();

    const isMobile = deviceType === "mobile";
    const isTablet = deviceType === "tablet";

    return (
        <SidebarHeader className="px-0 py-2 h-full flex items-between bg-gradient-to-b from-white via-white to-purple-100 group-data-[collapsible=icon]:items-center group-data-[state=expanded]:items-between">
            <div className="flex justify-between items-center">
                <Tabs defaultValue="account" className="group-data-[collapsible=icon]:hidden">
                    <TabsList className="bg-white">
                        <TabsTrigger
                            value="account"
                            className="font-bold rounded-none p-6 data-[state=active]:shadow-none data-[state=active]:border-b-3 data-[state=active]:border-b-orange-800 data-[state=active]:text-orange-800"
                        >
                            AI Copilot
                        </TabsTrigger>
                        <TabsTrigger
                            value="password"
                            className="font-bold rounded-none p-6 data-[state=active]:shadow-none data-[state=active]:border-b-3 data-[state=active]:border-b-orange-800 data-[state=active]:text-orange-800"
                        >
                            Details
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                {(isMobile || isTablet) && <SidebarTrigger className="text-black size-10" />}
            </div>

            <Separator className="border border-neutral-200" />

            <SidebarContent className="group-data-[collapsible=icon]:hidden flex-col-reverse overflow-hidden">
                <div className="px-2 space-y-4 relative h-full flex flex-col-reverse">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center w-full items-center gap-2">
                        <Bot className="w-10 h-10" />
                        <div className="flex flex-col items-center">
                            <p className="font-medium">Hi, I'm Fin AI Copilot</p>
                            <p className="text-sm text-gray-600">Ask me anything about this conversation.</p>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-4">
                        <div className="flex">
                            <Button
                                variant="outline"
                                className="bg-white text-sm rounded-lg"
                            >
                                <span className="font-bold">Suggested</span>💸 How do I get a refund?
                            </Button>
                        </div>
                    </div>
                </div>
            </SidebarContent>

            <SidebarFooter className="group-data-[collapsible=icon]:hidden">
                <div className="flex justify-between items-center shadow-md bg-white rounded-md px-2">
                    <Input
                        placeholder="Ask a question..."
                        className="border-none hover:border-none focus:border-none focus:ring-0 focus:outline-none"
                    />
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ChevronsUpIcon />
                    </Button>
                </div>
            </SidebarFooter>
        </SidebarHeader >
    )
}

export default ChatbotSidebar