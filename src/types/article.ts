interface ArticleMeta {
    title: string;
    slug: string;
    description: string;
    teaser: boolean;
    thumbnail: string;
    tags: string[];
}

interface ArticleInfo {
    meta: ArticleMeta;
    content: string;
}

export type {
    ArticleMeta,
    ArticleInfo
}