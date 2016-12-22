import React from 'react';
// import mkHomePage from '../components/homepage';

import render from '../md/renderer';
import containerStyle from '../components/containerStyle';
import Wrapper from '../components/Wrapper';

import content from './index.md';

export default () => (
  <Wrapper>
    <div className={containerStyle}>
      {render(content)}
    </div>
  </Wrapper>
)
