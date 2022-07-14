import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASj51Y1vhC74Cr-wPqKSHLg8DW8HMTITI&libraries=places"
          strategy="beforeInteractive" />
      </body>
    </Html>
  )
}
