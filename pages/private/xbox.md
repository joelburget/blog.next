---
layout: post
title: Xbox Linux
category: posts
published: July 31, 2015
description: The story of an Xbox which became my first linux server
authorName: Joel Burget
header: <link rel="stylesheet" type="text/css" href="/media/css/pigment2.css" media="screen, projection" />
        <link rel="stylesheet" type="text/css" href="/media/css/960.css" media="screen, projection" />
        <link href='http://fonts.googleapis.com/css?family=Cardo:400,400italic,700' rel='stylesheet' type='text/css'>
---

# Xbox Linux

It's now been a decade since this story happened. I'm trying to write down as much as I can remember before I forget even more.

Summer 2005 was between my freshman and sophomore years of high school. Linux is on the periphery of my consciousness. One of those words it feels like I've been hearing forever, yet I've never taken the time to investigate it. Like a popular song you've heard bits and pieces of a hundred times, but never played yourself. I understand that it's an operating system, but have no idea why I would ever use it instead of Windows. I associate it with the similarly vague term "open source", which (from 2015 this sounds surprising to hear), is somehow scary. Linked to yet a third hazy word -- "hacker" -- which, in 2004, is strongly negative. Imagine the horror I'd feel if I knew in just a few years I'd be a linux-using, open-source contributing, hacker.

At the time I remember being firmly in the Microsoft camp, though I had no particular reason for that affiliation. I vaguely remember seeing this July 2003 Wired article -- [The Peacemaker](http://archive.wired.com/wired/archive/11.07/40torvalds.html). Let's look at some example quotes:

> In the 12 years since he uploaded his operating system and became de facto master of the open source universe, the 33-year-old programmer has endured waves of attacks from developer zealots seeking to hijack open source to further their own agendas - toppling Microsoft, fighting the music industry, stopping the commercialization of open source software.

> WIRED: The open source community has all manner of rabid devotees. What's your strategy for keeping these forces at bay?

Is it any surprise that Microsoft's [anti-open-source propaganda](http://www.catb.org/~esr/halloween/halloween1.html) resonated with me?

All that to say, I was just beginning to come in to my own as a nerd.

...

Having watched enough TV that day I decided to change it up and get some fresh air. I'd play a sports videogame. Pressing the button on the front I expected to be greeted by the hum of the fan and whir of the disk drive preparing to eject. Instead I heard scratching and saw a red ring (actually, it was probably [flashing red-green](https://www.ifixit.com/Answers/View/29610/xbox+Red+Blinking+Light)).

## A Plan

The screen showed "Error code 6: kernel - Cannot unlock Hard Drive." My hard drive had crashed.

I drove to best buy to pick up a new hard drive, deciding along the way that while going through the trouble of opening up my xbox and installing new hardware I might as well do more to make my effort worth it.

After doing some research I decided that between the two prevailing distros as the time, Gentoox and Xebian (derivatives of Gentoo and Debian), I'd install Xebian for no particular reason.

## The Problem

I discovered that I was in a somewhat unique and troublesome position. All the guides assumed you had a *functioning* Xbox (where you would rather have a Linux box). The crux of the problem is this -- to install Linux the basic procedure is this:

0. Turn on the XBox
1. Use one of the games with known vulnerabilities to jailbreak.
2. Insert the Linux live cd, install.

Guides never actually mentioned step zero because it's natural to assume one can accomplish that step without needing to be told.

## The Workaround

The obvious workaround was to install Linux to the new hard drive, before installing it in the XBox. Typically one would place the hard drive in another computer (this was the age of PC towers), boot that computer to Linux, mount the XBox-bound hard drive, and overwrite it with the Xebian image.

QUESTION - what did i boot into? something different than Xebian?

However, in this case there was a hurdle (aren't there always?). XBox hard drives are locked (TODO insert note about the tech) (TODO is the key normally recovered from the HD?).

Luckily for me, it's possible to recover the key directly from the motherboard. [TODO]. Suddenly this Linux hack became my first soldering project.

[TODO if we've recovered the key why is hot swapping necessary?]
[TODO insert note about working when dad wasn't home]

## An XBox with a Mouse and Keyboard

In those days game consoles had no USB, bluetooth, or other way to attach a keyboard. However, XBox ports are really just USB in disguise. [TODO]

## Now for the Hard Part

What do you do with an XBox running Linux? I have no idea. It was one of those moments -- I've poured myself into this project for a week and I'm rewarded with... a blinking cursor. Host file server using DynDNS, ssh in. Not much else to do.



...

So here's the plan

* write a linux live cd, boot up computer, hot swap linux drive in, data transfer
* EEPROM - how does this fit?
* xebian install process
* usb hack

...

build eeprom reader - http://www.instructables.com/id/XBox-EEPROM-ReaderWriter/step10/Final-Notes/
hot swap data transfer
build usb converter - http://www.instructables.com/id/Professional-USB-Xbox-controller/
