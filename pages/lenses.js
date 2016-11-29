/*
---
layout: post
title: Hubble
category: posts
published: July 29, 2014
description: A Javascript Lens Library
authorName: Joel Burget
header: <link rel="stylesheet" type="text/css" href="/media/css/healthy-hackathon.css" media="screen, projection">
        <link rel="stylesheet" type="text/css" href="/media/css/syntax.css" media="screen, projection">
---
*/
import React from 'react';
import md from 'markdown-in-js';

import containerStyle from '../components/containerStyle';
import Wrapper from '../components/Wrapper';

const content = md`
# Javascript Lenses

Lenses are a pattern that Haskell has had for a while, where they make life much easier. I think it's time to adopt them in JavaScript, where they can make certain classes of code easier to write, easier to read, and faster.

## Lenses in Haskell

A lens is a reference to a specific part of a data structure. Let me give a few examples before diving into the details.

Note: In this section we're using the excellent [lens](https://hackage.haskell.org/package/lens) library - which has become the standard lens implementation in Haskell. Note that I'll be writing these examples in Haskell, but none require previous Haskell knowledge.

Say you have some nested tuple \`t :: ((Int, Int), Int)\` and you want the middle number - the second element of the first tuple. We can do that with pattern matching.

    > let t = ((1, 2), 3)
    > let ((_, x), _) = t in x
    2

It's also possible to do the same with a lens:

    > t^._1._2
    2

Now let's change the value of the second element of the first tuple.

    λ> let ((x, y), z) = t in ((x, "here"), z)
    ((1,"here"),3)

Using only pattern matching things start are starting to become clunky! We have to deal with all the parts of the data structure rather than just the parts we care about. Now with a lens:

    > t & _1._2 .~ "here"
    ((1,"here"),3)

Quick summary of what's going on:

* In both cases we start with \`((1, 2), 3)\` as the value to inspect
* \`_1._2\` is a lens - it can be read as "the first element of the tuple then
  the second" (as in "get the first element..." or "set the first element...". It gives instructions for locating part of a data structure.
* In the first example, \`^.\` means "get".
* In the second example, \`.~\` means "set".

Long story short - a lens allows us to focus on some part of a larger structure. We can say "get this part" or "set this part" (or more sophisticated operations).

For a more understandable and delightful explanation of lenses
check out [Lenses in
Pictures](http://adit.io/posts/2013-07-22-lenses-in-pictures.html).

## Lenses in Javascript

That's fine for a hamstrung language like Haskell, but why would we need that in Javascript where we're free to *mutate* objects?

    > x = [[1, 2], 3];
    > x[0][1] = "here";
    > x
    [[1, "here"], 3]

Because immutable data is incredibly useful! I could go on and on, but I'll give just one example.

I was recently working with [React](http://facebook.github.io/react/) where using immutable data [allows the system](http://facebook.github.io/react/docs/update.html) to determine whether a component should update, making your system potentially much faster. Om uses this trick to build *[The Future of JavaScript MVC Frameworks](http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/)*.

Let's assume for now that we're using immutable data. How do we create a modified structure? I can tell you how Khan Academy developers do it:

<p style={{overflow: 'hidden'}}><img style={{marginLeft: 0, float: 'left'}} src="/media/img/clone.png" /><img src="/media/img/cloneall.jpg" /></p>

We tend to sprinkle our code with \`clone\`s where we either anticipate a problem or (more likely) where we noticed breakage.

There's a more systematic and principled way to do the equivalent. Let's take one of those uses of \`clone\` and write it using lenses.

~~~javascript
var newAttrs = _.clone(oldAttrs);
newAttrs.childData = ...;

// becomes

var newAttrs = lens(oldAttrs).set(["childData"], ...);
~~~

What used to take two steps now takes one! It's clearer (less overhead) to me to create a new object with a modified focus than it is to clone and modify a new object.

We can also chain mutations.

~~~javascript
var newNewAttrs = lens(oldAttrs)
    .setC(["childData"], ...)
    .del(["dataWeDontCareAbout"]);
~~~

There's a chaining equivalent of each operation - \`set\` becomes \`setC\`, \`del\` becomes \`delC\`, etc. This way you don't have to call \`.chain\` and \`.value\` like in underscore.

## Make it Fast

I threw together a quick [performance test](http://jsperf.com/lens) to compare with two other methods of immutably modifying data. I'll have another post soon on why the lens-based approach is faster.

## Introducing Hubble

What's the most famous lens in the world? The Hubble Space Telescope!

I couldn't resist naming my little lens library [hubble](https://github.com/joelburget/hubble) even though that name is already [taken](https://github.com/jaymedavis/hubble).

You've already seen it in action, but let's look at a few more examples before wrapping up.

~~~javascript
var recipe = {
    ingredients: [
        {
            name: "chocolate",
            quantity: "1 cup"
        }
    ],
    steps: [
        "unwrap chocolate",
        "eat chocolate"
    ]
};

// chaining a set and a get
lens(recipe)
    .setC(["ingredients", 0, "name"], "dark chocolate")
    .get(["ingredients"])
// [{ name: "dark chocolate", quantity: "1 cup" }]

// there are also operations for adding to arrays
lens(recipe)
    .insertAfterC(["ingredients", 0], { name: "butter", quantity: "1 cup" })
    .get(["ingredients"])
// [
//   { name: "chocolate", quantity: "1 cup" },
//   { name: "butter", quantity: "1 cup" }
// ]
~~~

## Conclusion

Use lenses! They do a lot of work for you and lead to faster, more readable code.
`;

export default () => (
  <Wrapper>
    <div className={containerStyle}>
      {content}
    </div>
  </Wrapper>
)
