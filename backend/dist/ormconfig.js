"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_entity_1 = require("./src/entities/message.entity");
const config = {
    type: 'postgres',
    database: 'DCL-Explorer',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [message_entity_1.MessageEntity],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map