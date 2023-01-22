type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
    _type: string;

}

export interface Project extends Base {
    author: Author;
    body: string;
    link: string;
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    Note: string;
}

interface Image {
    _type: 'image';
    asset: Reference
}

interface Reference {
    _ref: string;
    _type: 'reference';
}

interface Slug{
    _type: 'slug';
    current: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface Author extends Base {
    name: string;
    image: Image;
}
