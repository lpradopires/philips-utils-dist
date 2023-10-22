import { Settings } from 'src/entities/settings.entity';
import { Repository, UpdateResult } from 'typeorm';
export declare class SettingsService {
    private settingsRepository;
    constructor(settingsRepository: Repository<Settings>);
    findAll(): Promise<Settings[]>;
    findOne(id: number): Promise<Settings>;
    findSelectedFields(id: number, fields: string[]): Promise<any>;
    remove(id: string): Promise<void>;
    create(contact: Settings): Promise<Settings>;
    update(contact: Settings): Promise<UpdateResult>;
}
