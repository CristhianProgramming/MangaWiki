export interface Character {
    data:  Datum[];
    meta:  Meta;
    links: CharacterLinks;
}

export interface Datum {
    id:            string;
    type:          Type;
    links:         DatumLinks;
    attributes:    Attributes;
    relationships: Relationships;
}

export interface Attributes {
    createdAt: null;
    updatedAt: null;
    role:      Role;
}

export enum Role {
    Main = "main",
    Supporting = "supporting",
}

export interface DatumLinks {
    self: string;
}

export interface Relationships {
    anime:     Anime;
    character: Anime;
    castings:  Anime;
}

export interface Anime {
    links: AnimeLinks;
}

export interface AnimeLinks {
    self:    string;
    related: string;
}

export enum Type {
    AnimeCharacters = "animeCharacters",
}

export interface CharacterLinks {
    first: string;
    next:  string;
    last:  string;
}

export interface Meta {
    count: number;
}
