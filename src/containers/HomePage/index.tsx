import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.attributes.slug}
              cover={post.attributes.cover.data.attributes.formats.small.url}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
