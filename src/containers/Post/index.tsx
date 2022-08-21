import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostCover } from '../../components/PostCover';
import { PostData } from '../../domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const object = Object(post.attributes.cover.data.attributes.formats);
  let coverUrl = object.small.url;
  if (object.large) coverUrl = object.large.url;

  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover coverUrl={coverUrl} alt={post.attributes.title} />
        <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};
