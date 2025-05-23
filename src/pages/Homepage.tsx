import ChatSection from "@/components/chat-section";
import ChatbotSidebar from "@/components/chatbot-sidebar";
import InboxSection from "@/components/inbox-section";
import { Sidebar, SidebarProvider, useSidebar } from "@/components/ui/sidebar";

const ChatContainer = () => {
    const { state } = useSidebar();
    const isExpanded = state === 'expanded';

    return (
        <div
            className={`flex-1 min-w-0 transition-all duration-300 ${isExpanded ? 'mr-[150px]' : ''
                }`}
            style={{
                width: isExpanded ? 'calc(100% - 350px - 400px)' : 'calc(100% - 350px)'
            }}
        >
            <ChatSection />
        </div>
    );
};

const Homepage = () => {
    const { state } = useSidebar();
    const isExpanded = state === 'expanded';

    return (
        <div className="relative h-full w-full">
            <div className="h-full flex bg-white overflow-hidden">
                <div className={`flex-shrink-0 border-r border-neutral-100 ${isExpanded ? "hidden" : "w-[350px]"}`}>
                    <InboxSection />
                </div>

                <SidebarProvider>
                    <ChatContainer />

                    <Sidebar
                        side="right"
                        collapsible="icon"
                        className="absolute right-0 top-0 bottom-0 h-full"
                        style={{ "--sidebar-width": "400px" } as React.CSSProperties}
                    >
                        <ChatbotSidebar />
                    </Sidebar>
                </SidebarProvider>
            </div>
        </div>
    );
};

export default Homepage;