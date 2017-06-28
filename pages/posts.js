import React from 'react';

import Wrapper from '../components/Wrapper';

const content = `
# Posts

* [Javascript Lenses](/lenses)
* [Blog 05-29-2017](/blog-05-29-2017)
* [You may be reading sequents wrong](/sequent-calculus)
`;

export default () => <Wrapper chrome={false}>{content}</Wrapper>;
