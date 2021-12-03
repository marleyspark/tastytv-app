# TastyTV - Watch Later SPA

> Website to advertise new company TastyTV including some special feature requests
> Live demo [_here_](https://angry-mcclintock-681cfb.netlify.app/).

## Table of Contents

- [General Info](#general-information)
- [Planning](#planning)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Wireframes & User Stories](#wireframe&user-stories)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)

## General Information

“TastyTV” is launching online soon. We are a movie and tv show live-streaming service, every day with a 12-hour repeating stream. And, we can't wait to help people discover amazing movies and tv shows.

They need to raise awareness about the company and its offerings. To that end, they want to launch a SPA that allows its visitors to maintain a list of movies and tv shows they want to watch later.

The SPA should allow people to add, edit, or remove movies or tv shows from their watch later list. They should also be able to mark an item as watched. Though they want to get them started with a few recommendations from our API, which you can find on this link that will change from time to time.

## Planning

I first started with the wireframe once those where completed I created the basic structure based on wireframes and the
user stories ensuring all those user stories where included on the site.
Then I started on the features of the site. I had some difficulty with getting the API details to show but this was resolved. 

Once all site features where in place I cleaned up the code ensuring it was working and nothing irrelevant was left in
or opens didn't have a close.

Once code was cleaned I worked on the CSS to get this into a modern look. 

On all issues I had I went back to lessons we covered to understand where I had missed something and then implemented
the changes in all cases I was able to get my functions working. The only issue I had to get additional clarification on
was on API showing which once explained was resolved and completed.

## Technologies Used

- html
- css
- JavaScript
- Bootstrap
- react

## Features

**Special Feature**

**Add a new item**
Submit button that uses user inputted (input) to add movie name and year to their list, inputting the details into a empty array (movie)

**mark item as watched**
Button that changes the status of the movie (watched) from true to false and updates colou of movie name from red to green

**Remove an item**
Button that removes the movie from the users list

**Remove all item**
Button that removes all movies from the users list regardless of it's watched status, with a window confirm so user can confirm if they do want to delete

**Remove all watched**
Button that removes all movies set as watched from the users list, with a window confirm so user can confirm if they do want to delete

**Add to my list**
Button that adds movie from API to users movie list

**get new suggestion**
Button that refreses the suggestions from API. 

## Wireframes & User Stories

link to [wireframes and user stories](https://miro.com/app/board/uXjVOfRJ3E0=/?invite_link_id=180678208356)

## Project Status

Project is: _complete_
Based on specifications from the customer.

## Room for Improvement

Include areas you believe need improvement / could be improved. Also add TODOs for future development.

| Improvement               | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| Allow editing of names and years              | Add function to be able to edit name and year                       |
| Add login features           | Add log in features keeping user details so can come back later to add more movies                           |
| Add additional API | Add another api calling another database of movies for a more varied option |
| Add movie search function   | Add ablilty to search movies by name and add to list                   |


## Contact

Created by Andrew Ralph-Gledhill
