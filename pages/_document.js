import Document, {Html, Head, Main, NextScript } from 'next/document'
import '../src/fb_init'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link 
          rel = "stylesheet" 
          href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css" 
          type="text/css"/>
          <link rel="game icon" href="/icon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}