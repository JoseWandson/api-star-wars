import { Personagem } from '../../shared/interface/personagem.interface';

export interface RootPersonagem {
    count: number;
    next: any;
    previous: string;
    results: Personagem[];
}
