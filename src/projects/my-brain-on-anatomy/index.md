---
title: "My Brain On Anatomy"
slug: "my-brain-on-anatomy"
date: "2014-12-28T12:48:34-04:00"
description: "My Brain on Anatomy contains interactive flipped classes for embryology and histology developed by Barbie Klein."
draft: true
links:
  - "https://www.mybrainonanatomy.com"
tags: 
  - "Static Site"
---

My Brain On Anatomy is an interactive website I've built for my partner's
emybrology and histology courses. Bringing technology to the classroom, this
website brings to life medical cases in the vain of the
Choose-Your-Own-Adventure Goosebumps books. The initial version was a Word
document that implemented hyperlinks to send users to different pages. From
there, I rebuilt the document as a static website multiple times with different
frameworks.

The first iteration of the site was built with Jekyll. One issue I ran into was
forgetting the basic intracies of deployment. At the time, I was using GitHub
pages for hosting and I would continually forget the process of making updates,
switching branches, and deploying changes since the site was only looked at
twice a year. Another major issue for me updating content since it forced the
client to learn the different facets of Markdown which inevitably led to me
updating the content.

The next iteration was built on top of WordPress. I created a custom theme
utilizing Advanced Custom Fields Pro which solved the problem of the client not
being able to easily update content. The only drawback I had was the bulkiness
of WordPress slowing the site down. Another "issue" I had was paying for a
WordPress hosting environment. The cheapskate in me couldn't stand to pay a few
bucks a month in hosting when I previously had been hosting the site for free.

I then began searching for a solution to using a static site generator with a
user-friendly UI. I ended up settling with Siteleaf to manage content. They
provided a simple and intuitive interface to edit content. I also started using
Netlify as a hosting provider since they had a variety of useful tools in
addition to free hosting offered for static websites.
