import { DashboardService } from 'src/services/dashboard/dashboard.service';
export declare class DefectDocsController {
    private dashboardService;
    constructor(dashboardService: DashboardService);
    getDocumentedDefDocs(params: {
        dt_inicio: string;
        dt_fim: string;
    }): Promise<any>;
}
