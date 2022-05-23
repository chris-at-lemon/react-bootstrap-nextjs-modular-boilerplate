import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { LayoutMain } from '../components/layout/LayoutMain'

function RostiApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  )
  
}

export default RostiApp
