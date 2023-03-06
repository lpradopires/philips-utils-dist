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
exports.GitIntegrationService = void 0;
const common_1 = require("@nestjs/common");
const simple_git_1 = require("simple-git");
const connection_git_service_1 = require("../../infrastructure/connection/connection-git/connection-git.service");
let GitIntegrationService = class GitIntegrationService {
    constructor(connectionGitService) {
        this.connectionGitService = connectionGitService;
    }
    async gitStatus(_nameFolder) {
        try {
            const sucess = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .status();
            if (sucess.conflicted.length > 0) {
                return { failed: sucess.conflicted };
            }
            return { sucess: sucess };
        }
        catch (error) {
            return { failed: error };
        }
    }
    async gitReset(_nameFolder) {
        try {
            const sucess = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .reset(simple_git_1.ResetMode.HARD, ['--']);
            return { sucess: sucess };
        }
        catch (error) {
            return { failed: error };
        }
    }
    async gitPull(_nameFolder, _nameBranch) {
        try {
            const sucess = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .pull('origin', _nameBranch, { '--no-rebase': null });
            return { sucess: sucess };
        }
        catch (error) {
            return { failed: error };
        }
    }
    async gitPush(_nameFolder, _nameBranch) {
        try {
            const sucess = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .push('origin', _nameBranch);
            return { sucess: sucess };
        }
        catch (error) {
            return { failed: error };
        }
    }
    async gitCheckout(_nameFolder, _nameBranch) {
        try {
            const sucess = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .raw('checkout', _nameBranch);
            return { sucess: sucess || 'Sucees checkout' };
        }
        catch (error) {
            return { failed: error };
        }
    }
    async gitCheckoutCreateBranch(_nameFolder, _nameBranch) {
        try {
            const sucess = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .checkoutLocalBranch(_nameBranch);
            return { sucess: 'Success True' };
        }
        catch (error) {
            return { failed: error };
        }
    }
    async gitFetch(_nameFolder) {
        try {
            const sucess = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .fetch();
            return { sucess: sucess || 'Success True' };
        }
        catch (error) {
            return { failed: error };
        }
    }
    async deleteAllBranchLocal(_nameFolder) {
        try {
            let sucess;
            const listAllBranch = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .branchLocal();
            if (listAllBranch.all.length > 1) {
                sucess = await this.connectionGitService
                    .getConnectionFolder(_nameFolder)
                    .deleteLocalBranches(listAllBranch.all, true);
            }
            return { sucess: sucess || 'Sucesss True' };
        }
        catch (error) {
            return { failed: error };
        }
    }
    async apllyCommit(_nameFolder, commitHash) {
        try {
            const sucess = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .raw(['cherry-pick', commitHash]);
            return { sucess: sucess };
        }
        catch (error) {
            return { failed: error };
        }
    }
    async commitAmend(_nameFolder, newMsgCommit) {
        try {
            const sucess = await this.connectionGitService
                .getConnectionFolder(_nameFolder)
                .commit(newMsgCommit, { '--amend': null });
            return { sucess: sucess };
        }
        catch (error) {
            return { failed: error };
        }
    }
};
GitIntegrationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [connection_git_service_1.ConnectionGitService])
], GitIntegrationService);
exports.GitIntegrationService = GitIntegrationService;
//# sourceMappingURL=git-integration.service.js.map