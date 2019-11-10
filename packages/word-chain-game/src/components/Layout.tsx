import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Head from './Head';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const GrobalStyle = createGlobalStyle`
:root {
  --color-background: #fcfcfa;
  --color-brand: #3af;
  --color-font: #333;
  --font-size-step: 0.8rem;
  --line-height-step: 0.8rem;
}

* {
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  font-size: 62.5%;
}

body {
  font-size: calc(var(--font-size-step) * 2);
  color: var(--color-font);
  min-height: 100vh;
  margin: 0;
  padding:0;
  background-color: var(--color-background);
  line-height: var(--line-height-step);
}

p {
  margin: 0;
}
`;

const Layout = styled.div``;

export default (props: Props) => (
  <Layout>
    <Head />
    <Header />
    <GrobalStyle />
    {props.children}
  </Layout>
);
