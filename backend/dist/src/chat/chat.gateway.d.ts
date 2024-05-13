import { ChatService } from './chat.service';
export declare class ChatGateway {
    private readonly chatService;
    constructor(chatService: ChatService);
    afterInit(server: any): void;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    handleNew(client: any, data: any): Promise<void>;
}
