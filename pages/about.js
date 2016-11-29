import React from 'react';
import md from 'markdown-in-js';

import containerStyle from '../components/containerStyle';

const content = md`
# About

I'm a software developer and designer from the US. I've worked professionally as a web developer focused on frontend / UI and also have extensive experience in typed functional programming. My most interesting work happens when I can mix UI and functional programming together.
`;

export default () => (
  <div className={containerStyle}>
    {content}
  </div>
)
