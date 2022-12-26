---
layout: ../../layouts/project-layout.astro
title: Discord Bot
gif: /assets/demos/discordBotDemo.gif
blurb: A real time interactive discord bot to make my friends very annoyed.
tags:
  - Python
  - Regex
githubLink: https://github.com/AlanCortez1337/Discord-Bot-Python
demoLink: N/A
figmaLink: N/A
funFact: I created the Regex feature because my friend corrected me in my use of "your" once, so out of spite and being a computer scientist I decided to one-up him.
---

## Purpose

I just wanted to build something my friends could play with and get annoyed by. With this bot I wanted to have unique triggers and interactions for my friends to spontaneously activate.

## Features

The features I managed to crack out in the span of a modest winter break were as follows:

- Annoying "You're" Correction Event
  - Using Regex, whenever someone typed any form of "your", "you're", "you are" then the bot would immediately respond with a gif.
- Spontaneous Emoji Reaction Event
  - There is a 1/20 chance that whenever someone sends a message in a text channel that the bot would react with 😳 or 😨.
- Indecisive Choice Command
  - This is where the user would simply ask the bot what they should do between the inputted choices and just randomly return a respond back.
- Number Roller Command
  - The command would accept two inputs which would either return a text prompt in the form of a DnD dice roll or just a random number roll.

more info in the GitHub repository!

## Lore

This project was one which I decided to push myself in learning more than one technology. At the time of making this bot I was still unsure about which field or language I wanted to learn in computer science. Hearing about the hip and popular language Python, I remembered that I can make a discord bot with it. Along the way I learned a lot of important lessons about enviornment variables and the practicality of git.

## Challenges

Developing the bot was a very trial and error process, so to speak. This was the time in my career that I had no idea what were enviornment variables so I would have to manually delete my Discord API key each time I wanted to push to GitHub. At least that is when I remembered to remove my API key because half the time I would be refreshing the key because Discord detected that my sensitive key is out in the open. Thankfully I recieved some guidence and learned about enviornment variables which made the whole process easier and more secure.

Some other challenges that rose were:

- Learning the disgusting syntax of Regex and crafting a pattern so that it flawlessly fulfilled my use case.
- Understanding what an API was, especially in the context of Discord.py
