import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Thinh Nguyen | Portfolio" />
          <meta
            name="description"
            content="As a dynamic, enthusiastic developer with high flexibility to adapt to the new working environment, I am seeking opportunities to improve myself and contribute to the company.
Strong engineering professional with a Bachelor of Computer Engineering from University of Science. A Front-end Developer with over 3 years of experience."
          />
          <meta property="og:image" content="https://iili.io/l3hcX9.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
