---
layout: ../../layouts/experience-layout.astro
title: Palolo Inc.
time: May 2023 - August 2023
highlights:
  - Collaborate with the marketing team and other developers via pull requests and meetings
  - Commmit 239 times across 10 unique pull requests relating to frontend and backend development
funFact: This is was my first internship and I was technically the first actual intern this company had hired.
---

## What is Palolo?

Palolo is a financial tech startup building the all-in-one platform for financial wellness. Palolo is bringing power to the employees by providing straight forward tools to use for their financial futures. Learn more about them [here](https://palolo.com/)!

## The Journey

During the summer of 2023, I had the opportunity to intern at Palolo, for a period of 10 weeks. I interacted with technologies such as **React.js**, **Prisma**, and **Git** to contribute in building their full-stack web application.

Using Git as a version control software I **committed 239 times**, created **10 unique pull requests**, and **reviewed 7 pull requests** from other engineers. By the end of the internship I can confidently say that it was an excellent experience that helped me grow as a full-stack web developer.

## Contributions

Across the span of 10 weeks, I managed to update the application's UI to creating tools to make Palolo employees and developers lives easier. Below goes more in detail about the various projects I had a heavy hand in during this internship.

**Template Emails**

Using Palolo's homemade email software, I added onto this by creating templated emails using React.js class components. These emails would mainly compose of employee invite reminder information to get more users on the platform.

When wiring these individual emails I would be calling the frontend API's to fetch the necessary numbers from the database to project on the emails. The importance of this is due to people are more likely willing to try a product which has high activity.

**UI Changes**

These were more incremental and small changes that I found myself doing during this internship when I had spare time. The changes would typically vary from changing the layout of a button to completely updating a page's UI design. Below is my workflow when it came to refactoring an entire UI page.

- Use Figma to show the design lead the direction I can take to update the UI
- Take premade UI components and combine them
- Work on the wording to make sure it is appropriate
- Revise until completed.

**HQ Tool**

I created what the team calls an HQ tool which Palolo employees are able to view member information regarding certain perk statuses. Using an HTML table I added a nice React.js twist to it by calling my first backend API that fetched data from database to project on it.

**Seed Script**

This was my first serious project in Palolo which I even found myself taking advantage of once I finished it. Essentially when developing we need a safe way to test features on members without using actual data. I went about refactoring the entire old script that seeded fake users into our local development using **Faker.js**.

**Command Palette**

After updating the **seed script** I found that the way we display users was too long and I knew no one wanted to scroll to find a user. This sparked the idea of creating a shortcut command palette that would use a fuzzy-search search bar to query and find organizations, members, or users instantly. Below are some points of interest I found when creating this:

- I used an event listener to bring up a modal only when the user had administrator privledges
- I created four API's to fetch data for each independent entity (organization, members, users)
- I created search flags such as _"org:"_ to give administrators a way to hone in on their search

**Documentation**

Since I had a great experience at the end of this internship I decided to give the company one parting gift from me, documentation. I created what I call _"Intern's Guide to Pretty Much Everything"_ which was a Notion document of all the things I learned.

This varied from how to rebase using git, to a list of useful command when troubleshooting.
