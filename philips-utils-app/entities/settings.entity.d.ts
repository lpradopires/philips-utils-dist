import moment from 'moment';
export declare class Settings {
    id: number;
    url_azure: string;
    azure_pass: string;
    user_base_corp: string;
    base_corp_pass: string;
    user_base_dev: string;
    base_dev_pass: string;
    ie_update_card_auto: boolean;
    ie_create_card_auto: boolean;
    path_frontend: string;
    path_backend: string;
    path_plsql: string;
    path_medicaldevice: string;
    created_at: moment.Moment;
    Updated_at: moment.Moment;
}
