---
layout: post
title: "My First Unity Game in a Week – An Intern’s Tale"
slug: my-first-unity-game-in-a-week-–-an-interns-tale
oldlink: //blog.cipherprime.com/musings/2014/06/my-first-unity-game-in-a-week-an-interns-tale
author: sidekicks
date: 2014-6-03 09:32:10 -0400
tags: 
---

Hello all, I’m Mary (@MaryKCassin), and I’m the new intern here at Cipher Prime. I’m currently a rising junior at Ringling College of Art and Design studying Game Art and I’ve been interning here since the beginning of May.

My first full-blown assignment as a Cipher Prime intern came on my second week here:

Create a game in a week using Unity.

I was a little daunted, because I had never touched Unity before or made a functioning game. I knew I had to keep it simple, but I still wanted the game to be entertaining.

Then Christiana, a fellow intern, thought I should make a drunk simulation game. The goal would be to try and keep your drunk character from tipping over by using the arrow keys to keep him upright. I thought this was a great idea and that it could be even more fun if I made BJ, our boss, the main character.

“**Get BJ Home” **was born!

[![Intro slide](/img/blog/blog1.jpg)](/img/blog/blog1.jpg)
----------------------------------------------------------

[![Intro Slide](/img/blog/blog3.jpg)](/img/blog/blog3.jpg)  [![death slide](/img/blog/blog2.jpg)](/img/blog/blog2.jpg)  [![Screen Shot 2014-05-30 at 3.02.35 PM](/img/blog/Screen-Shot-2014-05-30-at-3.02.35-PM.png)](/img/blog/Screen-Shot-2014-05-30-at-3.02.35-PM.png)

**Learning Unity**
------------------

My first challenge was just getting to know the nuts and bolts of Unity. To get myself started, I did a “make a game in 15min” tutorial on YouTube. This tutorial coupled with my previous knowledge of UDK and UE4 gave me the confidence to jump into a strange new development tool.

**Drunken Movement**
--------------------

How do you simulate a drunken walk?

First, I had to figure out how to apply physics to the character as well a way to control the character while having him drunkenly stumble down the street. Funnily enough, this was the easiest problem to solve. I realized if I just made a triangle mesh with the point facing down and turned on gravity, you’ve got a “drunk” mesh.  I added a script that made the player rotate on the x-axis using the arrow keys and that was that.

Then I had to figure out how I was going to move the character down the street. At first I though I would just move the scene so that it appeared that the player was moving. But after realizing that would be too much work I scrapped that idea. Then, with Zenas’ (founder of [QuadraTron Games](http://www.quadratron.com/) and a member of the [Philly Game Forge](http://phillygameforge.com/)) help, I scripted a vector lerping between two places that moves the object a reasonable speed.

**Game States**
---------------

Next, my game needed death and win states. This was a little more difficult. I learned about flagging and tagging objects. Zenas had to help me and do a lot of explaining, but I eventually understood the whole process and constructed a fully formed game loop!

**Asset Creation**
------------------

Creating the assets was fun but stressful, because I had to make a south Philly city street scene in a week. I managed to make enough assets, and when I put the lighting low enough then you couldn’t see the corners I had to cut to get everything done in time.

**The Show and Lessons Learned!**
---------------------------------

[ ![DSC_0170](/img/blog/DSC_0170.jpg)](http://blog.cipherprime.com/wp-content/uploads/2014/05/DSC_0170.jpg)   [![DSC_0175](/img/blog/DSC_0175.jpg)](/img/blog/DSC_0175.jpg) [![DSC_0201](/img/blog/DSC_0201.jpg)](/img/blog/DSC_0201.jpg)   [![DSC_0183](/img/blog/DSC_0183.jpg)](/img/blog/DSC_0183.jpg)

When it all came together it was pretty cool seeing that I had made a game and I think everyone at [Dev Night](http://blog.cipherprime.com/?p=8783&preview=true) got a kick out of it.  When people stepped up to the plate I realized that it was probably too challenging. I was the only person who could finish the level.

Next time, I know I need to get someone to play test my game before I show it off to the world. I enjoyed making the game in Unity much more than I’d anticipated, and I found out which areas of game development I need to improve on (mostly scripting). Can’t wait for the next one!

You can play my game right below here! See if you can get BJ home.

[  
![Unity Web Player. Install now!](/img/blog/getunity.png)  
](http://unity3d.com/webplayer/ "Unity Web Player. Install now!")

<!-- body { font-family: Helvetica, Verdana, Arial, sans-serif; background-color: black; color: white; text-align: left; } a:link, a:visited { color: #bfbfbf; } a:active, a:hover { color: #bfbfbf; } p.header { font-size: small; } p.header span { font-weight: bold; } p.footer { font-size: x-small; } div.content { margin: auto; width: 600px; } div.broken, div.missing { margin: auto; position: relative; top: 50%; width: 193px; } div.broken a, div.missing a { height: 63px; position: relative; top: -31px; } div.broken img, div.missing img { border-width: 0px; } div.broken { display: none; } div#unityPlayer { cursor: default; height: 270px; width: 600px; } --> -->
