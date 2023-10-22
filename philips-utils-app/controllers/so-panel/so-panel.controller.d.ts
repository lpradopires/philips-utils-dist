import { DashboardService } from 'src/services/dashboard/dashboard.service';
export declare class SoPanelController {
    private dashboardService;
    constructor(dashboardService: DashboardService);
    getAllCustomersWithSo(): Promise<any>;
}
