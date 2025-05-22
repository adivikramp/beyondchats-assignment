export interface InboxItem {
    id: number;
    name: string;
    message: string;
    time: string;
    unread: number;
    active?: boolean;
}

export type NavUserProps = {
    user: {
        name: string
        email: string
        avatar: string
    }
}