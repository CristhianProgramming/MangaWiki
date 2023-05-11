export interface CharacterDetails {
    data: Data;
}

export interface Data {
    id:            string;
    type:          string;
    links:         DataLinks;
    attributes:    Attributes;
    relationships: Relationships;
}

export interface Attributes {
    createdAt:     Date;
    updatedAt:     Date;
    slug:          string;
    names:         Names;
    canonicalName: string;
    otherNames:    any[];
    name:          string;
    malId:         number;
    description:   string;
    image:         Image;
}

export interface Image {
    tiny:     string;
    large:    string;
    small:    string;
    medium:   string;
    original: string;
    meta:     Meta;
}

export interface Meta {
    dimensions: Dimensions;
}

export interface Dimensions {
    tiny:   Large;
    large:  Large;
    small:  Large;
    medium: Large;
}

export interface Large {
    width:  number;
    height: number;
}

export interface Names {
    en:    string;
    ja_jp: string;
}

export interface DataLinks {
    self: string;
}

export interface Relationships {
    primaryMedia:    Castings;
    castings:        Castings;
    mediaCharacters: Castings;
    quotes:          Castings;
}

export interface Castings {
    links: CastingsLinks;
}

export interface CastingsLinks {
    self:    string;
    related: string;
}
