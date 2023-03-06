import { Settings } from 'src/entities/settings.entity';
import { SettingsService } from 'src/services/settings/settings.service';
export declare class SettingsController {
    private settingsService;
    constructor(settingsService: SettingsService);
    index(): Promise<Settings>;
    create(settingsData: Settings): Promise<any>;
    update(id: any, settingsData: Settings): Promise<any>;
    delete(id: any): Promise<any>;
}
