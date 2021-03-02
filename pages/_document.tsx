import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx)
  //     return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <title>Hola </title>
        </Head>
        <body className="body-test">
          <h1>Xd</h1>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
