Football Tracker:

This website ranks how well some friends did at predicting which football teams would win for a season.

This project was made to practice:

-Github Pages
-retrieving data from JSON using Fetch API
-visualizing data using chart.js
-modules

Features:

-The "File: " section loads the file name from the json file itself, meaning that any json file in the same format could be plugged in.
-The stats of each person are compared: their averages, their win ratios, their list of favorite team, and overall ranking of people's 
accuracy and most picked teams.
-A football shaped cursor (for fun), colors that stay on-theme yet stay readable (even grayscale)
- responsive sizing for easy viewing on mobile devices

Challenges:

-I could not connect the cdn file of chart.js to the js file on my own. What I saw in the tutorial for it was incorrect for my version,
so I did have to ask ai about it, which gave me the correct linking method. I only did this after exhausting my other options, I did 
design and write the whole thing myself though.
-Chart.js has a limitation where any chart columns (like: 'person1', 'person2', 'person3') need to be stated before making the chart.     Arrays
wouldn't work, so any data can be plugged in as long as it is for the same amount of people. 
-The football teams chart is hard to read since there are a lot of teams, however users can see more on hover and 2 charts wouldn't make sense. 
-The canvas used for the confetti on the ranking page needed to be synced with the backround tier on all device sizes which was challenging. 


What I would do differently if I had more time:
- Allow users to create their own files if they wished.
- Reuse more functions. I did not because chart.js's requirement of pre-defining everything, but the values and names
      can be switched out.
- I did not add the aria accessibility roles for the data because this was for a few friends and they all had working eyes. I would do it
      on a normal website of course.
-The coloration is suboptimal, however the goal was to make it look like a football field, so it can be hard to read in some cases. 
