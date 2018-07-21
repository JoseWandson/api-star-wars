import { Planeta } from './planeta.interface';
import { NaveEspacial } from './nave-espacial.interface';

export interface Personagem {
    id: number;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: Planeta;
    films: string[];
    species: string[];
    vehicles: any[];
    starships: NaveEspacial[];
    created: Date;
    edited: Date;
    url: string;
}
