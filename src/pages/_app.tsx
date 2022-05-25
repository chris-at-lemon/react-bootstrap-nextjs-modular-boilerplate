import '../styles/globals.scss'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'

const LayoutMain = dynamic(() => import("../components/layout/LayoutMain"));

function RostiApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  )
  
}

export default RostiApp
