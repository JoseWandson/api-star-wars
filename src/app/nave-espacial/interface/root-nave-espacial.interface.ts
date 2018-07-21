import { NaveEspacial } from '../../shared/interface/nave-espacial.interface';

export interface RootNaveEspacial {
    count: number;
    next: string;
    previous: any;
    results: NaveEspacial[];
}
