import ChatSection from "@/components/chat-section";
import ChatbotSidebar from "@/components/chatbot-sidebar";
import InboxSection from "@/components/inbox-section";
import { Sidebar, SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useDeviceType } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { PanelRightIcon } from "lucide-react";
import React, { useEffect } from "react";

const ChatContainer = () => {
    const { state } = useSidebar();
    const isExpanded = state === "expanded";
    const deviceType = useDeviceType();

    const isMobile = deviceType === "mobile";
    const isTablet = deviceType === "tablet";
    const isLaptop = deviceType === "laptop";
    const isMonitor = deviceType === "monitor";

    if ((isMobile || isTablet) && isExpanded) {
        return null;
    }

    return (
        <div
            className={`flex-1 min-w-0 transition-all duration-300 ${isExpanded ? 'mr-[150px]' : ''}`}
            style={{
                width: isLaptop || isMonitor
                    ? (isExpanded ? 'calc(100% - 350px - 400px)' : 'calc(100% - 350px)')
                    : '100%'
            }}
        >
            <ChatSection />
        </div>
    );
};

const Homepage = () => {
    const { state, toggleSidebar } = useSidebar();
    const isExpanded = state === "expanded";
    const deviceType = useDeviceType();

    const isMobile = deviceType === "mobile";
    const isTablet = deviceType === "tablet";
    const isLaptop = deviceType === "laptop";
    const isMonitor = deviceType === "monitor";
    const [showChatbotSidebar, setShowChatbotSidebar] = React.useState(false);

    useEffect(() => {
        toggleSidebar();
    }, [])

    if ((isMobile || isTablet) && isExpanded) {
        return (
            <div className="relative h-full w-full">
                <div className="h-full flex bg-white overflow-hidden">
                    <div className="w-full">
                        <InboxSection />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative h-full w-full">
            <div className={`h-full flex bg-white overflow-hidden ${(isMobile || isTablet) ? 'flex-col' : 'flex-row'}`}>
                {/* Mobile triggers */}
                {(isMobile || isTablet) && (
                    <>
                        {(isMobile) && <SidebarTrigger className={`${showChatbotSidebar ? "hidden" : "flex"} fixed rounded-bl-none rounded-tl-none text-white bg-black top-2 left-0 z-50 p-4`} />}
                        <div className="fixed top-2 right-0 flex justify-between z-50">
                            <Button
                                onClick={() => setShowChatbotSidebar(!showChatbotSidebar)}
                                size="sm"
                                className="bg-black text-white rounded-tr-none rounded-br-none"
                            >
                                <PanelRightIcon className="h-2 w-2" />
                            </Button>
                        </div>
                    </>
                )}

                {/* Left sidebar - InboxSection */}
                {(isMobile || isTablet) ? (
                    <>
                        {!isExpanded && (
                            <div className="flex-shrink-0 border-r border-neutral-100 w-full">
                                <InboxSection />
                            </div>
                        )}
                        <div className="flex-1 w-full">
                            <ChatSection />
                        </div>
                    </>
                ) : (
                    <div className={`flex-shrink-0 border-r border-neutral-100 ${isExpanded ? "hidden" : "w-[350px]"}`}>
                        <InboxSection />
                    </div>
                )}

                <SidebarProvider>
                    {!isMobile && !isTablet && <ChatContainer />}

                    {/* Right sidebar - ChatbotSidebar */}
                    {(isLaptop || isMonitor) ? (
                        <Sidebar
                            side="right"
                            collapsible="icon"
                            className="absolute right-0 top-0 bottom-0 h-full"
                            style={{ "--sidebar-width": "400px" } as React.CSSProperties}
                        >
                            <ChatbotSidebar />
                        </Sidebar>
                    ) : (
                        showChatbotSidebar && (
                            <div className="fixed inset-0 z-40 bg-white">
                                <div className="h-full w-full">
                                    <ChatbotSidebar />
                                </div>
                            </div>
                        )
                    )}
                </SidebarProvider>
            </div>
        </div>
    );
};

export default Homepage;