export interface CategoryMaster {
    data:  Category[] ;
    meta:  any;
    links: any;
}

export interface Category {
    id:            string;
    type:          string;
    links:         CategoryLinks;
    attributes:    Attributes;
    relationships: Relationships;
}

export interface Attributes {
    createdAt:       Date;
    updatedAt:       Date;
    title:           string;
    description:     string;
    totalMediaCount: number;
    slug:            string;
    nsfw:            boolean;
    childCount:      number;
}

export interface CategoryLinks {
    self: string;
}

export interface Relationships {
    parent: Anime;
    anime:  Anime;
    drama:  Anime;
    manga:  Anime;
}

export interface Anime {
    links: AnimeLinks;
}

export interface AnimeLinks {
    self:    string;
    related: string;
}
