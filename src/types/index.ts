import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { MutableSnapshot } from 'recoil';

export type Post = {
  author: string;
  content: string;
};

export type GetInitialRecoilState<P = {}> = (pageProps: P, mutableSnapshot: MutableSnapshot) => void;

export type NextPageWithRecoil<P = {}, IP = P> = NextPage<P, IP> & {
  getInitialRecoilState?: GetInitialRecoilState<P>;
};

export type AppPropsWithRecoil<P = {}> = AppProps<P> & {
  Component: NextPageWithRecoil<P>;
};
