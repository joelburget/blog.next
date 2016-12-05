import React from 'react';
import Link from 'next/link';
import md from 'markdown-in-js';

import containerStyle from './containerStyle';

const mapping = {
  a: Link,
};

export default fn => (
  <div className={containerStyle}>{md(mapping, fn)}</div>
)
