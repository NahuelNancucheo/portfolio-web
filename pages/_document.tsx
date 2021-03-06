import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <body className="bg-gradient-to-r from-blue-100 to-blue-400 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument