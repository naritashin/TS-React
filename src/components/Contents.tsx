import React from 'react';
import styled from 'styled-components';

import { wordList } from '../const';

const ContentsWrap = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;

const Content = styled.div`
  line-height: calc(var(--font-size-step) * 2);
`;

export default () => (
  <ContentsWrap>
    {wordList.map(word => (
      <React.Fragment key={word.id}>
        <Content>{word.label}</Content>
      </React.Fragment>
    ))}
  </ContentsWrap>
);
