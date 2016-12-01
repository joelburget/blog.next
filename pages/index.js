import React from 'react';
// import mkHomePage from '../components/homepage';
import md from 'markdown-in-js';

import containerStyle from '../components/containerStyle';
import Wrapper from '../components/Wrapper';

const content = md`
# Joel Burget

I'm a software developer and designer from the US. I've worked professionally as a web developer focused on frontend / UI and also have extensive experience in typed functional programming. My most interesting work happens when I can mix UI and functional programming together.

## Links

* [/now](/now): What I'm working on how
* [/canon](/canon): Inspiration
* [/resume](/resume): Work I'm proud of

## Get in Touch

* github: [joelburget](https://github.com/joelburget)
* twitter: [dino_joel](http://twitter.com/dino_joel)
* email: [joelburget@gmail.com](joelburget@gmail.com)
`;

export default () => (
  <Wrapper>
    <div className={containerStyle}>
      {content}
    </div>
  </Wrapper>
)

// export default class Index extends React.Component {
//   componentDidMount() {
//     const Homepage = mkHomePage();
//     console.log('here');
//     this.homepage = <Homepage />;
//   }

//   render() {
//     return this.homepage || <div>waiting</div>;
//   }
// }
