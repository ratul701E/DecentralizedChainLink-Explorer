import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    private client_count = 0

    public increment_client_count() {
        this.client_count++
    }

    public decrement_client_count() {
        this.client_count--
    }

    public get_client_count() {
        return this.client_count
    }
}
