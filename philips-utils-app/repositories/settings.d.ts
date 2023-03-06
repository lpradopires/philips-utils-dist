import { Repository } from 'typeorm';
import { Settings } from 'src/entities/settings.entity';
export declare class SettingsRepository {
    private settingsRepository;
    constructor(settingsRepository: Repository<Settings>);
}
