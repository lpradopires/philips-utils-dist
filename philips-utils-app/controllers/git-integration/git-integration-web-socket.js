"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitIntegrationWebSocket = void 0;
const websockets_1 = require("@nestjs/websockets");
let GitIntegrationWebSocket = class GitIntegrationWebSocket {
    constructor() {
        this.users = 0;
    }
    async handleConnection() {
        this.users++;
        this.server.emit('users', this.users);
    }
    async handleDisconnect() {
        this.users--;
        this.server.emit('users', this.users);
    }
    async onChat(client, message) {
        setInterval(() => {
            client.broadcast.emit('chat1', '1 se');
        }, 1000);
        setInterval(() => {
            client.broadcast.emit('chat1', '5 se');
        }, 5000);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], GitIntegrationWebSocket.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('chat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GitIntegrationWebSocket.prototype, "onChat", null);
GitIntegrationWebSocket = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    })
], GitIntegrationWebSocket);
exports.GitIntegrationWebSocket = GitIntegrationWebSocket;
//# sourceMappingURL=git-integration-web-socket.js.map