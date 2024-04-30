# what-is-time

A duration "converter" for those who have trouble with their internal clock and might better understand time as measured by a familiar song.

## Some lessons learned:
- I didn't have all the Microsoft core fonts on Linux, so I didn't realize until testing outside that OS how atrocious my headers were looking at 700 weight!
- Not a lesson learned as much as one remembered: I spent a chunk of time trying to figure out if I was somehow not pulling the right input values into my function, only to realize the actual problem was that my + operator was concatenating and not adding.

## Want to explore more:
- I had less success using `querySelector` for my variables than when I used `getElementByID`. Doing some reasearch I now understand `getElementByID` is more explicit for readability, which I like, and has some performance benefits, but I want to do more experimenting to find out why `querySelector` seemed to not work *at all* for some of my variables in this script.

## Goals for the project
### duration input
- Allow for longer durations (days, months, years)
- Add duration calculator
### song input
- Connect with database for track length info (Spotify datasets?)
### other inputs
- Add options to measure time in movies and TV shows
### appearance
- Continue to develop ye olde Windows aesthetic