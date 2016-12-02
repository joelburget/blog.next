import React from 'react';
import md from 'markdown-in-js';

import containerStyle from '../components/containerStyle';
import Wrapper from '../components/Wrapper';

const content = md`
# Couldn't find what you're looking for.

Try [home](/)?
`;

export default () => (
  <Wrapper>
    <div className={containerStyle}>
      {content}
    </div>
  </Wrapper>
)
