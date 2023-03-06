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
exports.ConnectionGitService = void 0;
const common_1 = require("@nestjs/common");
const simple_git_1 = require("simple-git");
let ConnectionGitService = class ConnectionGitService {
    constructor() {
        console.log('Init conection folder');
    }
    getOptionsFolder(_urlFolder) {
        const options = {
            baseDir: _urlFolder,
            binary: 'git',
            maxConcurrentProcesses: 6,
            trimmed: false,
        };
        return options;
    }
    getConnectionFolder(_urlFolder) {
        return (0, simple_git_1.simpleGit)(this.getOptionsFolder(_urlFolder));
    }
};
ConnectionGitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ConnectionGitService);
exports.ConnectionGitService = ConnectionGitService;
//# sourceMappingURL=connection-git.service.js.map