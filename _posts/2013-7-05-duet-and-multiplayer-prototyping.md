---
layout: post
title: "Duet and Multiplayer Prototyping"
slug: duet-and-multiplayer-prototyping
oldlink: //blog.cipherprime.com/devnotes/2013/07/duet-and-multiplayer-prototyping
author: sidekicks
date: 2013-7-05 13:50:16 -0400
tags: 
---

So, Duet’s development has been taking a lot longer than we ever really anticipated. What the hell has been the major challenge? The simple answer: networked multiplayer prototyping. Before we did any core development, we made everything we needed to connect a player and get into a game. This seemed totally logical at the time, but in retrospect it was a huge mistake.

[![internet 240x240](/img/blog/internet-240x240.jpg "The internet: it's kind of complicated.")](/img/blog/Internet_map_1024.jpg)

When you’re creating a game, you want as much freedom as possible to test out new ideas. If you’re testing your game in a networked environment, you need to run two instances of your development software or have two machines. At the same time, you must also make sure that both of those instances are running the latest code (which probably just changed two seconds ago). If you’re running two windows on the same machine, it’s very easy to forget to update, and then start changing code in the wrong, out-of-date window. This is silly and frustrating, it makes you feel dumb, and it’s also completely unavoidable the longer the day wears on.

After all that is said and done, you then need to create a room and join it. The simple answer there: make a default room your code joins. The problem: each developer then needs a separate room and has to maintain an individual codebase. All these things are very simple and trivial until you add them all together.

[![multiplayer x240](/img/blog/multiplayer-x240.jpg "Local multiplayer")](/img/blog/multiplayer-x240.jpg)

Funnily enough, there’s a really easy answer to all of these problems: when creating a brand-new, experimental multiplayer game, make it work locally on the same machine first. This is WAAAYYYY easier to develop and cuts down your testing time immensely, getting you your game faster. And besides, I think local multiplayer is more fun.
