import React from "react";
import { ServerStyleSheet } from "styled-components";
import Docment from "next/document";

export default class MyDocument extends Docment {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Docment.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    };
  }
}
