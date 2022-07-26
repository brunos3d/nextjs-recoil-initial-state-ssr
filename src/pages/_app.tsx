import { RecoilRoot } from 'recoil';

import type { AppPropsWithRecoil } from '../types';

function MyApp({ Component, pageProps }: AppPropsWithRecoil) {
  return (
    <RecoilRoot initializeState={(mutableSnapshot) => Component?.getInitialRecoilState?.(pageProps, mutableSnapshot)}>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
