/*
---
layout: post
title: Do not delete anything in this directory, ever
category: posts
published: February 26, 2011
description: me screwing up my computer again
header: <link rel="stylesheet" type="text/css" href="/media/css/do-not-delete.css" />
        <link href='http://fonts.googleapis.com/css?family=Neuton&subset=latin' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Crimson+Text&subset=latin' rel='stylesheet' type='text/css'>
---
*/
import React from 'react';
import md from 'markdown-in-js';

import containerStyle from '../components/containerStyle';
import Wrapper from '../components/Wrapper';

const content = md`
<h1 id="bigIntro">"Do not delete anything in this directory, ever"</h1>

Truer words were never spoken, as I found out when I was messing around with my /usr/lib directory. I was simply trying to get <a href="http://code.google.com/p/nativeclient/">Native Client</a> (NaCl) to work on my <a href="http://www.archlinux.org/">Arch</a> machine. Not everything was working:

~~~
[joel@archlinux startup]$ sel_ldr a.out
sel_ldr: error while loading shared libraries: libcrypto.so.0.9.8: cannot open shared object file: No such file or directory
~~~

Ok, I said, let's see what version of libcrypto I have.

~~~
[joel@arch ~]$ cd /usr/lib
[joel@arch lib]$ ls | grep "libcrypto"
libcrypto.a
libcrypto.so
libcrypto.so.1.0.0
~~~

Cool! Maybe I can just symlink it!

~~~
[joel@arch lib]$ sudo ln -s libcrypto.so.1.0.0 libcrypto.so.0.9.8
[joel@arch lib]$ ls | grep "libcrypto"
libcrypto.a
libcrypto.so
libcrypto.so.0.9.8
libcrypto.so.1.0.0
~~~

Perfect, let's try NaCl again.

~~~
[joel@archlinux startup]$ sel_ldr a.out
sel_ldr: error while loading shared libraries: libcrypto.so.0.9.8: cannot open shared object file: No such file or directory
~~~

Well since that didn't work I should remove the symlink I made.

~~~
[joel@arch lib]$ sudo rm libcrypto.so.1.0.0
~~~

Wait a second... OH NO! I deleted the wrong version!

The first thing I thought was that maybe there's another version somewhere on my system that I could copy over? Nope. Maybe there's some way I can restore the old copy? Doubt it. Ok so I have get another copy from somewhere else. Let's try updating my system to see if it is restored:

~~~
[joel@archlinux lib]$ sudo pacman -Syu
pacman: error while loading shared libraries: libcrypto.so.1.0.0: cannot open shared object file: No such file or directory
~~~

Ohthisisreallynotgood! I have to get that library back on my system somehow but my package manager doesn't work. Ok, check the pacman mirror list to find somewhere I can download it from... If my browser works.  I opened up <a href="http://www.gtlib.gatech.edu/pub/linux/distributions/archlinux">http://www.gtlib.gatech.edu/pub/linux/distributions/archlinux</a> and... yes the page loads.

Luckily I found the package I needed, lib32-openssl-1.0.0.a-6-x86_64.pkg.tar.xz.tar, but I had no idea what a tar.xz.tar was. It turns out they're untarred in this way: <code>tar xvJf lib32-openssl-1.0.0.a-6-x86_64.pkg.tar.xz.tar</code>. So I finally had the library on my system, and put in place. Time to test it out:

~~~
[joel@archlinux lib]$ pacman
pacman: error while loading shared libraries: libcrypto.so.1.0.0: wrong ELF class: ELFCLASS32
~~~

Oh come on!

Luckily, though, I was able to find another version of the library, openssl-1.0.0.a-3-x86_64.pkg.tar.gz, which worked.

The moral of the story is this- don't mess with your /usr/lib directory, or any library directory, unless you really know what you're doing.
`;

export default () => (
  <Wrapper>
    <div className={containerStyle}>
      {content}
    </div>
  </Wrapper>
)
