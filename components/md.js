import React from 'react';
import Link from 'next/link';
import md from 'markdown-in-js';

import containerStyle from './containerStyle';

export default fn => (
  <div className={containerStyle}>
    {md({a: Link}, fn)}
  </div>
)
