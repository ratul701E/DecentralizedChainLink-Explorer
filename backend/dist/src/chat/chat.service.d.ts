import { MessageEntity } from 'src/entities/message.entity';
import { Repository } from 'typeorm';
import { MessageDTO } from './dto/message.dto';
export declare class ChatService {
    private readonly messageRepo;
    private client_count;
    constructor(messageRepo: Repository<MessageEntity>);
    increment_client_count(): void;
    decrement_client_count(): void;
    get_client_count(): number;
    save_message(messageDto: MessageDTO): Promise<void>;
}
