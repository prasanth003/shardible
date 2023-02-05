export interface iCollection {
    thumbnail: string;
    author: {
        title: string;
        thumb: string;
        name: string;
    };
    price: string;
    bidRate: string;
}


export interface iCollectionContent {
    title: string;
    content: string;
}