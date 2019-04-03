---
layout: post
title: "The Cooperation Continuum"
slug: the-cooperation-continuum
oldlink: //blog.cipherprime.com/devnotes/2013/05/the-cooperation-continuum
author: sidekicks
date: 2013-5-17 12:31:53 -0400
tags: 
---

This past week we’ve started getting into the nitty-gritty of cooperative puzzle play.

Before we try adding any genre-bending features to Duet, we want to nail down cooperative puzzles that extend the original Auditorium’s gameplay. To do this, we have to figure out where we should place the game on the continuum of styles of cooperative gameplay.

[![duet cooperation continuum](/img/blog/cooperation-continuum.jpg)](/img/blog/cooperation-continuum.jpg)

The Continuum: Almost Zero to Total
-----------------------------------

At one extreme, we could have two completely separate games that are being played at the same time. Player Blue and Player Pink would have their own streams, controls, obstacles, and goals. The shared aspect of gameplay would be limited to the gamespace or playtime. Call this “Almost Zero Co-op”.

At the other end, Player Blue and Player Pink could share everything that exists in the game. Either player could move around any control and bend any stream of particles. They could both support and interfere with each other’s work. This is “Total Co-op”.

And all along the middle of the continuum are various types of gameplay where certain things “belong” to a single player and other features are shared between them. One example: the two players each deal with their own streams using their own controls, but they share the playing field’s obstacles and goals. Certain gameplay options could increase or decrease the level of cooperation. There might be a way to pass controls from one player to another, or there might be environmental obstacles that pass a stream from Blue-space to Pink-space.

Players Need Some Personal Space
--------------------------------

The cooperation continuum could also be described as how much “personal space” or “freedom” you give to a player.

Every co-op game will have a different sweet spot. Duet probably won’t have Almost Zero Co-op, because while it might look pretty and work smoothly, it wouldn’t advance the original game all that much. On the other hand, Duet will also probably not have Total Co-op, because the original gameplay is highly “fiddly”. Think back to how the smallest actions could drastically change the particle streams in the original. Now imagine trying to do same thing with another person you can’t talk to. Duet players will need some personal space.

[![Duet preview](/img/blog/cooperation-continuum-1-x240.jpg)](/img/blog/cooperation-continuum-1-x240.jpg)

Open-Ended Coding
-----------------

What this means from a programming perspective is that we need to make sure that all these things are toggleable. We need to be able to turn the shared states of different game elements on and off on the fly. Having all the toggleable states also gives us the potential to shift that cooperation continuum “slider” one way or another over the course of the game. Being able to set up these different game possibilities quickly and easily will allow us to test all these different games much faster. The only way to see if something is fun to play is to play it, and there’s quite a bit to play.
