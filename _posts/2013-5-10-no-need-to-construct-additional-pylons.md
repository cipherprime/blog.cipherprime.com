---
layout: post
title: "No Need to Construct Additional Pylons"
slug: no-need-to-construct-additional-pylons
oldlink: //blog.cipherprime.com/devnotes/2013/05/no-need-to-construct-additional-pylons
author: dain
date: 2013-5-10 11:34:09 -0400
tags: 
---

For the past week, most of Cipher Prime has been out of the office, celebrating [Nikko](http://blog.cipherprime.com/author/nikkolai/)‘s wedding and catching some tasty Cali waves. Excuses, excuses.

But rest assured, I’ve been holding down the fort, and have even found a way to use the solitude productively: I’ve been creating a new server-side build manager for Unity.

As it stands, every time we need a new build of our games, we have to get one of our devs to drop what they’re doing, change a bunch of settings, build on their machine, and distribute the build internally for testing. And if we need to submit a build for contests while in the middle of production, it gets even more time-consuming and prone to user error.

Pylon: Build Orders Made Easy
-----------------------------

[![Build orders made easy](/img/blog/pylon-1-x240.jpg)](/img/blog/pylon-1-x240.jpg)

To solve this problem, I built Pylon, a build manager that interfaces with Unity Asset Server to compile builds server-side. All you have to do is note what platforms you’re building for, name the build, and press a button — bam, go get a cup of coffee while the server generates your build. You can even select which revision you want to build, which is helpful when one of your guys breaks the build but you still need a working copy to send to press.

[![](/img/blog/pylon-3-x240.png)](/img/blog/pylon-3-x240.png)

Once the builds are complete, they are then neatly organized by project, and the server generates trackable download links that can be used internally or emailed to select people:

[![pylon 2 x240](/img/blog/pylon-2-x240.png)](/img/blog/pylon-2-x240.png)

I’m looking forward to getting this battle-tested when the team returns next week. As we progress with Duet, I’m expecting this server to save us hundreds of man-hours normally wasted on the build process.

Why “Pylon”?
------------

Because we play too much StarCraft II. Naturally, I named the server after the Protoss structure that enables you to build more units, the “pylon”.

[![starcraft pylon x240](/img/blog/starcraft-pylon-x240.jpg)](/img/blog/starcraft-pylon-x240.jpg)

With Pylon, I’m hoping we’ll execute our build orders as efficiently in the office as we do in StarCraft. And if all goes well, we may decide to release this as a product for Unity users everywhere. But let us break it first — I wouldn’t even consider this alpha level software yet! We’ll keep you posted.
