import { Planeta } from '../../shared/interface/planeta.interface';

export interface RootPlaneta {
    count: number;
    next: string;
    previous: any;
    results: Planeta[];
}
