import { Personagem } from '../../shared/interface/personagem.interface';

export interface Planeta {
    id: number;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: Personagem[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}
