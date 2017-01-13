import React from 'react';
import Wrapper from '../components/Wrapper';

const content = `
# Cologne: Good-Smelling Ray Tracer

Cologne is my attempt to write an <i>interesting</i> ray tracer in Haskell. I hope to fulfill the following goals:

* Code Quality- The code should be understandable to a ray-tracing beginner, suitable for learning and hacking.
* Speed- I hope to achieve speed comparable to a ray tracer written in C or C++. The current goal is 2 - 3 times slower than a C ray tracer.
* Interesting- I'm interested in algorithms like adaptive sampling and progressive photon mapping
* Fun- It should be enjoyable to write and use, for me and others.

<br />

## Samples

### Cornell Box
<a href="http://twitpic.com/3hjhpf"><img src="/media/img/cologne1.png" width="250" height="250" alt="Cornell Box Scene" /></a>

### Attempted Cornell Box
<img src="/media/img/cologne2.png" width="250" height="250" />
<img src="/media/img/image-cool.png" width="250" height="250" />

## Ready to try it out?

<a href="http://github.com/joelburget/cologne">Get the code (github)</a>
`;

export default () => <Wrapper>{content}</Wrapper>;
