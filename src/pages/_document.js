import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  const apiKey = `https://maps.googleapis.com/maps/api/js?key=${process.env.googleMapsApiKey}&libraries=places`;

  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {() => console.log(apiKey)}
        <script
          src={apiKey}
          strategy="beforeInteractive" async />
          <h1>Hello</h1>
      </body>
    </Html>
  )
}
