export interface Paragraphe {
    content: string;
}

export interface Article {
    title: string;
    description: string;
    authors: string[];
    paragraphes: Paragraphe[];
    date: Date;
}
