// https://fast-river-12248.herokuapp.com/api/posts?populate=*

export type PostID = number;

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: {
      name: string;
      created_at: string;
      updated_at: string;
      published_at: string;
    };
  };
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: {
      name: string;
      created_at: string;
      updated_at: string;
      published_at: string;
    };
  };
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = {
  data: {
    id: PostID;
    attributes: PostCoverFormat & {
      alternativeText: string;
      caption: string;
      formats: {
        thumbnail?: PostCoverFormat;
        small?: PostCoverFormat;
        medium?: PostCoverFormat;
        large?: PostCoverFormat;
      };
      previewUrl: null;
      provider: string;
      created_at: string;
      updated_at: string;
    };
  };
};

export type PostData = {
  id: PostID;
  attributes: {
    title: string;
    content: string;
    slug: string;
    created_at: string;
    updated_at: string;
    published_at: string;
    cover: PostCover;
    author: PostAuthor;
    category: PostCategory;
  };
};
