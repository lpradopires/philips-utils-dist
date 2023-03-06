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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const settings_entity_1 = require("../../entities/settings.entity");
const typeorm_2 = require("typeorm");
let SettingsService = class SettingsService {
    constructor(settingsRepository) {
        this.settingsRepository = settingsRepository;
    }
    findAll() {
        return this.settingsRepository.find();
    }
    findOne(id) {
        return this.settingsRepository.findOneBy({ id });
    }
    async remove(id) {
        await this.settingsRepository.delete(id);
    }
    async create(contact) {
        return await this.settingsRepository.save(contact);
    }
    async update(contact) {
        return await this.settingsRepository.update(contact.id, contact);
    }
};
SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(settings_entity_1.Settings)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SettingsService);
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map