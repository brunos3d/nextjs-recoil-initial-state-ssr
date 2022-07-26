import { atom } from 'recoil';

import type { Post } from '../types';

export const postState = atom<Post[]>({
  key: 'posts',
  // this will be replaced if the page uses `getInitialRecoilState`
  default: [],
});
