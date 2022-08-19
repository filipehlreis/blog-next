import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch(
    'https://fast-river-12248.herokuapp.com/api/posts?populate=*',
  );
  const jsonPosts = await posts.json();
  // console.log(jsonPosts['data']);
  return jsonPosts['data'];
};

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
    // revalidate: 5,
  };
};
