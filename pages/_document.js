import { Html, Head, Main, NextScript } from "next/document";

const isLocal = process.env.LOCAL_ENV;
export default function Document() {
  return (
    <Html
      prefix="og: http://ogp.me/ns#"
      lang="ru"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <link rel="icon" href="../icon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="../icon.ico" type="image/png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        {!isLocal && (
          <meta
            name="google-site-verification"
            content="_Mj2o2Y4toCnhEhzYpsG9_P1hhAQkQzGIWK7ExsZv4g"
          />
        )}
        {!isLocal && (
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-YLCQZMLXKP"
          ></script>
        )}
        {!isLocal && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-YLCQZMLXKP');`,
            }}
          />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        {!isLocal && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3654540844516810"
            crossOrigin="anonymous"
          ></script>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
