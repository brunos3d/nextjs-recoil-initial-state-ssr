import type { GetServerSideProps } from 'next';
import { useRecoilValue } from 'recoil';

import type { Post, NextPageWithRecoil, GetInitialRecoilState } from '../types';

import { postState } from '../state/posts';

export type HomePageProps = {
  posts: Post[];
};

/**
 * You can also use `getStaticProps` and `getInitialProps`
 */
export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const posts: Post[] = [
    {
      author: 'Bruno Silva',
      content: 'How to use Recoil with Next.js and initialize state in SSR!',
    },
    {
      author: 'Next.js',
      content: 'Hello, World!',
    },
    {
      author: 'Recoil',
      content: 'Initializing state from SSR with getInitialRecoilState',
    },
  ];

  return {
    props: { posts },
  };
};

/**
 * You don't need to get the post from page props
 * You can get it from `useRecoilValue` or `useRecoilState`
 */
const Home: NextPageWithRecoil<HomePageProps> = ({}: HomePageProps) => {
  const posts = useRecoilValue(postState);

  // open next serve process on terminal and check the ssr values
  console.log(typeof window === 'undefined' ? 'server-side' : 'client-side', posts);

  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.content}>
            <strong>{post.author}</strong>: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Here you can just use
 *
 * Home.getInitialRecoilState = (pageProps, mutableSnapshot) => {
 *   // ...
 * };
 *
 * I'm using in this way to demonstrate the use of typings
 * */
const getInitialRecoilState: GetInitialRecoilState<HomePageProps> = (pageProps, mutableSnapshot) => {
  mutableSnapshot.set(postState, pageProps.posts);
};

Home.getInitialRecoilState = getInitialRecoilState;

export default Home;
