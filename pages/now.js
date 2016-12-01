import React from 'react';
import md from 'markdown-in-js';

import containerStyle from '../components/containerStyle';
import Wrapper from '../components/Wrapper';

const content = md`
# What I'm Working on Now

Working on [Pigment](http://pigment.io) -- my vision of a future of computing

Traveling / Exploring

Doing software consulting (currently at [Spring](http://shopspring.com))

Reading

  - The Once and Future King
  - Bleak House
  - Scott Alexander (Slate Star Codex) posts
  - The Timeless Way of Building
  - The Count of Monte Cristo

Papers

  - Programming in Martin-Löf’s Type Theory
  - Metaobject protocols: Why we want them and what else they can do
  - The Art of the Propagator
  - Epigram Reloaded
  - Constructions on Constructors
  - Elimination with a Motive
  - Cubical Type Theory: a constructive interpretation of the univalence axiom

Writing

  - An alternative take on routing for React applications
  - "A Funny Thing Happened on the Way to the Future"
  - My First Linux Computer -- my XBox

Cooking -- currently focused on relying less on the "bunch of stuff in a bowl
with hot sauce" meme, practicing the fundamentals (a la Julia Child), and
learning new ingredients
`;

export default () => (
  <Wrapper>
    <div className={containerStyle}>
      {content}
    </div>
  </Wrapper>
)
