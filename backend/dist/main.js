"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    console.clear();
    process.stdout.write('\x1b[32m');
    process.stdout.write('Block Explorer Backend Monitor\n');
    process.stdout.write('\x1b[0m');
    process.stdout.write(`Total connected: ${0}\r`);
}
bootstrap();
//# sourceMappingURL=main.js.map