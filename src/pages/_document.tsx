import {
  AppCacheProvider,
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document(
  props: React.JSX.IntrinsicAttributes & DocumentHeadTagsProps
) {
  return (
    <Html lang="en">
      <AppCacheProvider>
        <Head>
          <DocumentHeadTags {...props} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </AppCacheProvider>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
