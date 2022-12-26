---
layout: ../../layouts/project-layout.astro
title: Case Clicker
gif: /assets/demos/caseClickerDemo.gif
blurb: An immersive clicker game in the likeness of my friend Case
tags:
  - React
  - Framer Motion
githubLink: https://github.com/AlanCortez1337/Case-Clicker
demoLink: https://click-case.netlify.app/
figmaLink: N/A
funFact: I was originally going to have a mode where the user fights Case to regain lost affection.
---

## Purpose

I wanted to challenge myself in creating a client-side endless clicker game with the usage of Framer Motion animations.

## Lore

I was learning how React works during this summer period when a thought came across my head at the time: _"Can I make a clicker game in one month before my friends birthday?"_ So I went about developing this ambitious project and the overall goals I wanted to achieve in this time frame.

I came to the conclusion that I wanted:

- A picture of my friend to click on
- An emoji reaction waterfall similar to Instagram in livestreams
- Perks to help the user build to something
- Satisfying animations

I like to think that in the time frame I set myself for that I achieved all of these. I did have some other ideas I wanted to add but I knew for my minimum viable product (MVP) that it needed to be more digestible. Overall I am really impressed with what I created and it was a fun project to learn React the hard way.

## Challenges

It goes without saying that learning React was a challenge during this time but I think a particular thing that stumped me was Hooks. At a surface are built-in React tools to help manage state and all that gross stuff. I felt really accomplished when it clicked how useState and useEffect works, especially when combining these two in order to create my own custom Hook. These were some fun challenges I faced and I think the best part of this project was that it was a gift which motivates me to build more radical things for people.

Some other minor challenges I faced were:

- The logic of a universal timer to handle: affection meter, perk countdown, and the literal timer
- The logic of the reaction waterfall with the emojis.
  - The way I implemented this was to push a new emoji into a vector and have that animate shortly. I feel like there might be a better solution upon further consideration.
- How state interacts with setTimeout() in JavaScript. (It did not help that I was stubborn enough to try and create my own timer without too much research)
