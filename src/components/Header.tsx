import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: var(--color-brand);
  font-size: calc(var(--font-size-step) * 3);
  line-height: calc(var(--line-height-step) * 5);
  height: 5.6rem;
`;

export default () => <Header>SHIRITORI -Word Chain Game-</Header>;
