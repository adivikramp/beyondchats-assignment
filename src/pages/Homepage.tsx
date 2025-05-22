import { useState } from "react";
import {
    Card,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import {
    Avatar,
    AvatarFallback
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { InboxItem } from "@/types/types";
import { inboxItems, messages } from "@/data/data";

const Homepage = () => {
    const [selectedChat, setSelectedChat] = useState<InboxItem | null>(null);

    const handleChatSelect = (item: InboxItem) => {
        setSelectedChat(item);
    };

    return (
        <div className="flex-1 py-10 px-6 bg-[#F0F5FA] flex">
            <main className="flex-1 bg-white rounded-sm shadow-xl flex">
                <div className="w-1/3 border-r border-gray-200 p-4">
                    <h1 className="text-lg font-semibold mb-4">Your inbox</h1>
                    {inboxItems.map((item) => (
                        <Card
                            key={item.id}
                            className={`mb-2 cursor-pointer ${selectedChat?.id === item.id ? "bg-blue-50" : ""}`}
                            onClick={() => handleChatSelect(item)}
                        >
                            <CardHeader className="flex flex-row items-center space-x-3 p-3">
                                <Avatar>
                                    <AvatarFallback>{item.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.time}</p>
                                    </div>
                                    <p className="text-sm text-gray-500 truncate">{item.message}</p>
                                </div>
                                {item.unread > 0 && (
                                    <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                                        {item.unread}
                                    </span>
                                )}
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                {/* Chat Area */}
                <div className="w-2/3 flex flex-col">
                    {selectedChat ? (
                        <>
                            <div className="p-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold">{selectedChat.name}</h2>
                            </div>
                            <div className="flex-1 p-4 overflow-y-auto">
                                {messages.map((msg) => (
                                    <div key={msg.id} className="mb-4">
                                        <p className="bg-blue-100 p-3 rounded-lg inline-block">{msg.text}</p>
                                        <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                                    </div>
                                ))}
                                <div className="flex items-center space-x-2">
                                    <Avatar>
                                        <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <p className="text-sm">
                                        Let me just look into this for you, {selectedChat.name}.
                                    </p>
                                </div>
                            </div>
                            <CardFooter className="p-4 border-t border-gray-200">
                                <Input placeholder="Use 8K for shortcuts" className="flex-1 mr-2" />
                                <Button>Send</Button>
                            </CardFooter>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-gray-500">Select a chat to start messaging</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Homepage;