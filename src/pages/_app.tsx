import '../styles/globals.scss'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import {
  RecoilRoot,
} from 'recoil';

const LayoutMain = dynamic(() => import("../components/layout/layoutMain"));

function RostiApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </RecoilRoot>
  )
  
}

export default RostiApp
