import { IArticle, IGetArticlesOptions } from "./article.validation";
export declare const createArticleService: (aeticleData: IArticle) => Promise<{
    headline: string;
}>;
export declare const getArticlesService: (articleData: IGetArticlesOptions) => Promise<{
    articles: {
        id: string;
        headline: string;
        keywords: string[];
        sourceName: string | null;
        url: string;
        urlToImage: string[];
        description: string;
        categoryId: string;
        userId: string | null;
        tagId: string;
        publishedAt: Date;
        updatedAt: Date;
    }[];
    totalCount: number;
    totalPages: number;
    nextLink: string | null;
    prevLink: string | null;
}>;
export declare const getArticleByIdService: (id: string) => Promise<{
    id: string;
    headline: string;
    keywords: string[];
    sourceName: string | null;
    url: string;
    urlToImage: string[];
    description: string;
    categoryId: string;
    userId: string | null;
    tagId: string;
    publishedAt: Date;
    updatedAt: Date;
}>;
export declare const updateArticleService: (id: string, articleData: IArticle) => Promise<{
    id: string;
    headline: string;
    keywords: string[];
    sourceName: string | null;
    url: string;
    urlToImage: string[];
    description: string;
    categoryId: string;
    userId: string | null;
    tagId: string;
    publishedAt: Date;
    updatedAt: Date;
}>;
export declare const deleteArticleService: (id: string) => Promise<{
    id: string;
    headline: string;
    keywords: string[];
    sourceName: string | null;
    url: string;
    urlToImage: string[];
    description: string;
    categoryId: string;
    userId: string | null;
    tagId: string;
    publishedAt: Date;
    updatedAt: Date;
}>;
