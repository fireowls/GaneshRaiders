export interface Paragraphe {
    content: string;
}

export interface Article {
    name: string;
    title?: string;
    description?: string;
    authors?: string[];
    paragraphes?: Paragraphe[];
    date: Date;
}
