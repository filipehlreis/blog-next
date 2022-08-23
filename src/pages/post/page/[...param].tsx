import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import HomePage from '../../../containers/HomePage';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PostData } from '../../../domain/posts/post';

export type PageProps = {
  posts: PostData[];
};

export default function Page({ posts }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando ...</div>;
  if (!posts.length) return <div>Página não encontrada ...</div>;

  return <HomePage posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts(
    'sort=id%3Adesc&pagination[start]=0&pagination[limit]=30',
  );
  return {
    props: { posts },
    revalidate: 600,
  };
};
