export class ArticlesResult {
    public totalResults: number;
    public articles: Article[];
}

export class Article {
    public source: Source;
    public author: string;
    public title: string;
    public description: string;
    public url: string;
    public urlToImage: string;
    public published: Date;
}

export class Source {
    public sourceId: string;
    public name: string;
}
