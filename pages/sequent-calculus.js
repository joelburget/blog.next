import React from 'react';
import Wrapper from '../components/Wrapper';

const content = `
# You may be reading sequents wrong

Today a very smart colleague of mine realized he's been reading sequents wrong for years. This post is an attempt to prevent that (understandable) mistake for others.

## Sequents?

The sequent calculus was invented by Gerhard Gentzen in 1934 / 1935 in a powerhouse paper "Investigations in Logical Deduction", which also introduced natural deduction to prove the [Cut-elimination theorem](https://en.wikipedia.org/wiki/Cut-elimination_theorem). Not satisfied with just one, he dealt with both classical and intuitionistic logic in the paper. Needless to say, it was a *very* impressive work. Maybe I'll have more to say about it another time.

## What's the problem?

I've included most of the rules from Gentzen's original paper (which is surprisingly readable). Take a look:

### "Schemata for structural inference figures"

![](/static/sequent-calculus/thinning.jpg)
![](/static/sequent-calculus/contraction.jpg)
![](/static/sequent-calculus/interchange.jpg)
![](/static/sequent-calculus/cut.jpg)

### "Schemata for operational inference figures"

![](/static/sequent-calculus/operational-inference.jpg)

I won't go into the details of what these rules are saying (though they're all pretty approachable). My point is very simple.

Everyone's first instinct is to read "," as "and". Makes sense. Unfortunately, in the sequent calculus "," means "and" on the left side of an arrow (or a turnstile "⊢" in more modern notation) but *"or"* on the right. Surprising.

Take the thinning rule for example. In the "or" interpretation it makes perfect sense that you can introduce some irrelevant D (in the succedent).

![](/static/sequent-calculus/thinning.jpg)

* Makes sense: "I can prove Theta, so I can prove Theta or D"
* Doesn't make sense: "I can prove Theta, so I can prove Theta and D"

## Symmetry

Why did Gentzen use ","? I believe it's to highlight the symmetry you might notice in some left- and right-rules. Compare the two contraction rules, or "&-IA" vs "v-IS" -- it's really beautiful.

![](/static/sequent-calculus/contraction.jpg)

## References

* [Interactive sequent calculus tutorial](http://logitext.mit.edu/tutorial)
* Frank Pfenning has great notes in general; here are some on [sequent calculus](https://www.cs.cmu.edu/~fp/courses/15317-f09/lectures/09-seqcalc.pdf)
* The sequent calculus has recently been used very cleverly as a [compiler intermediate language](https://www.microsoft.com/en-us/research/publication/sequent-calculus-as-a-compiler-intermediate-language/)
* [Proof](https://en.wikipedia.org/wiki/Sequent_calculus#Sequent_calculus_systems) that I'm telling the truth: "The standard semantics of a sequent is an assertion that whenever every A_i is true, at least one B_i will also be true."
`;

export default () => <div><Wrapper>{content}</Wrapper><style jsx global>{`img { width: 500px; }`}</style></div>;
