import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Separator } from "@radix-ui/react-separator";

import { inboxData } from "@/data/data";
import React from "react";
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

type Checked = DropdownMenuCheckboxItemProps["checked"]

const InboxSection = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
        <>
            <header className="bg-white">
                <div className="flex justify-between items-center p-4 font-bold tracking-wide">
                    <h1>Your Inbox</h1>
                </div>
            </header>

            <Separator className="border border-neutral-200" />

            <div className="flex flex-col h-full overflow-hidden">
                {/* Dropdown Menu Section */}
                <div className="flex flex-row justify-between px-4 py-2 bg-white">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="border-none bg-white text-black shadow-none hover:bg-white hover:text-black p-0">
                                <span className="font-bold">5 Open</span>
                                <ChevronDown className="h-4 w-4 ml-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuCheckboxItem
                                checked={showStatusBar}
                                onCheckedChange={setShowStatusBar}
                            >
                                Status Bar
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={showActivityBar}
                                onCheckedChange={setShowActivityBar}
                                disabled
                            >
                                Activity Bar
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={showPanel}
                                onCheckedChange={setShowPanel}
                            >
                                Panel
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="border-none bg-white text-black shadow-none hover:bg-white hover:text-black p-0">
                                <span className="font-bold">Waiting Request</span>
                                <ChevronDown className="h-4 w-4 ml-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuCheckboxItem
                                checked={showStatusBar}
                                onCheckedChange={setShowStatusBar}
                            >
                                Status Bar 2
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={showActivityBar}
                                onCheckedChange={setShowActivityBar}
                                disabled
                            >
                                Activity Bar 2
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={showPanel}
                                onCheckedChange={setShowPanel}
                            >
                                Panel 2
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mail List Section */}
                <div className="flex-1 overflow-y-auto bg-white hide-scrollbar">
                    <div>
                        {inboxData.mails.map((mail) => (
                            <a
                                href="#"
                                key={mail.email}
                                className="rounded-md flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            >
                                <div className="flex w-full items-center gap-2">
                                    <Avatar className="h-7 w-7">
                                        <AvatarFallback className="bg-orange-100">{mail.name.charAt(0).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col mx-2 gap-y-1">
                                        <span>{mail.name}</span>
                                        <span className="line-clamp-1 w-[200px] whitespace-break-spaces text-xs">
                                            {mail.teaser}
                                        </span>
                                    </div>
                                    <span className="ml-auto mt-auto text-xs">{mail.date}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InboxSection