import Document, { Html, Head, Main, NextScript } from 'next/document'

const ScriptDark = `
let dark = localStorage.getItem('darkMode')
if(dark == 'true') {
  console.log("modo Dark")
  document.getElementById("body").classList.add('bg-dark');
}
`

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
            <link rel="manifest" href="/icons/manifest.json"/>
        </Head>
        {/* <body style={{backgroundColor: '#000000', height: '100%'}}>
          <Main />
          <NextScript />
        </body> */}
        <body id="body" style={{height: '100%'}}>
          <script dangerouslySetInnerHTML={{__html: ScriptDark}}></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument