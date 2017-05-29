import React from 'react';
import Wrapper from '../components/Wrapper';

const content = `
# Blog / Links May 29, 2017

One of my new years resolutions this year was to write something at least weekly. It's almost June, so now's a good time to start.

## Apps

[Dash](https://kapeli.com/dash) for Mac is one of my most used apps, so I had been curious about the iPhone version. Not curious enough to actually [build it myself](https://kapeli.com/dash_ios#update). Happily, it was (re-)[released](https://blog.kapeli.com/dash-for-ios-back-on-the-app-store) to the app store last week.

Ever wanted to insert emoji using ":" like on Slack? Enter [Rocket](http://matthewpalmer.net/rocket/). Wanted to hide all your menu bar icons? [Vanilla](http://matthewpalmer.net/vanilla/). Thanks [Matthew Palmer](http://matthewpalmer.net/) for making these!

## Papers I'm reading

### [Compiling without Continuations](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/join-points-pldi17.pdf)

Interesting for a few reasons:

* The prevailing wisdom is that compilers are all about continuations.
* Simon Peyton Jones is one of my favorite authors
* The previous *join points* paper was about using the sequent calculus instead of the lambda calculus as a model of computation but I didn't get a deep intuition from that one. Hopefully this can fill in the gaps.

However, Ed Kmett [pointed out](https://twitter.com/kmett/status/869209134868164609) there's a [similar paper](http://www.ccs.neu.edu/home/shivers/papers/mrlc-jfp.pdf) from 2004 by Olin Shivers and David Fisher.

### [Modular Rollback through Control Logging (A Pair of Twin Functional Pearls)](https://people.mpi-sws.org/~turon/rollback.pdf)

The title is a bit obtuse, but the abstract hooked me:

> We present a technique, based on the use of first-class control operators, enabling programs to maintain and invoke rollback logs for sequences of reversible effects. Our technique is modular, in that it provides complete separation between some library of effectful operations, and a client, “driver” program which invokes and rolls back sequences of these operations. In particular, the checkpoint mechanism, which is entirely encapsulated within the effect library, logs not only the library’s effects, but also the client’s control state.  Thus, logging and rollback can be almost completely transparent to the client code.

> This separation of concerns manifests itself nicely when we must implement software with sophisticated error handling. We illustrate with two examples that exploit the architecture to disentangle some core parsing task from its error management. The parser code is completely separate from the error-correction code, although the two components are deeply intertwined at run time.

This one is by Olin Shivers and Aaron Turon.

I found it cited in [Do be do be do](https://arxiv.org/abs/1611.09259) (the *Frank* paper).

### Naming

> Words are pale shadows of forgotten names. As names have power, words have power. Words can light fires in the minds of men. Words can wring tears from the hardest hearts. There are seven words that will make a person love you. There are ten words that will break a strong man's will. But a word is nothing but a painting of a fire. A name is the fire itself.

-- Patrick Rothfuss, The Name of the Wind

Wondering at the coincidence of finding two Olin Shivers papers simultaneously, I looked him up and found [What's in a name?](https://blogs.janestreet.com/whats-in-a-name/). Nice piece about naming in computer science. Though he doesn't mention my favorite type of name, private keys.
`;

export default () => <Wrapper showFooter>{content}</Wrapper>;
