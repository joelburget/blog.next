import React from 'react';

import render from '../md/renderer';
import containerStyle from '../components/containerStyle';
import Wrapper from '../components/Wrapper';

const content = `
# Couldn't find what you're looking for.

Try [home](/)?
`;

export default () => (
  <Wrapper>
    <div className={containerStyle}>
      {render(content)}
    </div>
  </Wrapper>
)
