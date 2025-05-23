import { Separator } from "./ui/separator";
import { Send, ChevronDown, MessageSquare, Smile, Zap, Bookmark, Ellipsis, MoonStar, MonitorX } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"]

const ChatSection = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
        <>
            <header className="flex justify-between items-center p-4 bg-white">
                <div className="flex justify-between items-center font-bold tracking-wide">
                    <h1>Luis Easton</h1>
                </div>
                <div className="flex gap-2">
                    <Ellipsis className="h-6 w-6 text-gray-500 bg-gray-200 rounded-md p-1 cursor-pointer hover:bg-gray-300" />
                    <MoonStar className="h-6 w-6 text-gray-500 bg-gray-200 rounded-md p-1 cursor-pointer hover:bg-gray-300" style={{ fill: 'black' }} />
                    <div className="h-6 flex bg-black gap-x-0 rounded-md px-3 items-center hover:bg-gray-800 cursor-pointer">
                        <MonitorX className="h-full w-7 text-white rounded-md p-1">Close</MonitorX>
                        <span className="text-white text-sm font-bold tracking-wide">Close</span>
                    </div>
                </div>
            </header>

            <Separator className="border border-neutral-200" />

            <div className="flex flex-col h-full">
                {/* Chat Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* Customer Message (Left) */}
                    <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8 self-end">
                            <AvatarFallback className="bg-gray-100">A</AvatarFallback>
                        </Avatar>
                        <div className="max-w-md rounded-lg shadow-sm bg-gray-100 p-3">
                            <p className="text-sm text-gray-800">
                                I bought a product from your store in November as a Christmas gift for a member of my family.
                                However, it turns out they have something very similar already. I was hoping you'd be able to
                                refund me, as it is un-opened.
                            </p>
                            <div className="flex">
                                <span className="text-xs text-neutral-400 pt-1">
                                    1min
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Owner Message */}
                    <div className="flex justify-end gap-3">
                        <div className="max-w-xs rounded-lg shadow-sm p-3 bg-blue-100">
                            <p className="text-sm text-gray-800">
                                Let me just look into this for you, Luis.
                            </p>
                            <div className="flex items-center justify-end gap-0 mt-1">
                                <span className="text-xs text-gray-500">Seen</span>
                                <span className="text-xs text-gray-500">·</span>
                                <Badge variant="outline" className="text-xs border-none">
                                    1min
                                </Badge>
                            </div>
                        </div>
                        <Avatar className="h-8 w-8 self-end">
                            <AvatarFallback className="bg-gray-100">A</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                {/* Chat Footer */}
                <div className="pb-48 px-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center border-none bg-white text-black shadow-none hover:bg-white hover:text-black p-0">
                                    <MessageSquare className="h-4 w-4" style={{ fill: 'black' }} />
                                    <span className="font-bold">Chat</span>
                                    <ChevronDown className="h-4 w-4 ml-1" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuCheckboxItem
                                    checked={showStatusBar}
                                    onCheckedChange={setShowStatusBar}
                                >
                                    Chat
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={showStatusBar}
                                    onCheckedChange={setShowStatusBar}
                                >
                                    AI
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={showPanel}
                                    onCheckedChange={setShowPanel}
                                >
                                    Voice
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Input with action buttons */}
                        <div className="relative">
                            <Input
                                placeholder="Use %K for shortcuts"
                                className="shadow-none pr-20 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                        </div>

                        <div className="relative flex px-2 justify-between pt-4">
                            <div className="pr-20 py-2 border-none">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-black hover:text-gray-700">
                                    <Zap className="h-4 w-4" style={{ fill: 'black' }} />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-black hover:text-gray-700">
                                    <Bookmark className="h-4 w-4" style={{ fill: 'black' }} />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-black hover:text-gray-700">
                                    <Smile className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm text-gray-500">Send</span>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-black hover:text-gray-700 pb-0">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatSection;