import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicons/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/site.webmanifest`}
        />
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
        />
        <meta name="msapplication-TileColor" content="#222222" />
        <meta
          name="msapplication-config"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH}/browserconfig.xml`}
        />
        <meta name="theme-color" content="#222222" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
