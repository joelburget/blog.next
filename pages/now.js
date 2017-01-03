import React from 'react';

import render from '../md/renderer';
import containerStyle from '../components/containerStyle';
import Wrapper from '../components/Wrapper';

import content from './now.md';

export default () => (
  <Wrapper>
    {render(content)}
  </Wrapper>
);
