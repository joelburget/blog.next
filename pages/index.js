import React from 'react';

import render from '../md/renderer';
import Wrapper from '../components/Wrapper';

import content from './index.md';

export default () => (
  <Wrapper chrome={false}>
    {render(content)}
  </Wrapper>
)
