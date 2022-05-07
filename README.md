# Sorting Hat

## Goals
The goal of this project is to test your knowledge and to have a FUN time stretching yourself on your FIRST independent application that will become a part of your portfolio.

Focus on MVP. Do not spend a ton of time styling initially. Hit functionality first and then spend time on the styling of the project using bootstrap.

- READ THROUGH ALL OF THE INFORMATION BELOW before planning how you will tackle the project.
- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions in help tickets if you need help. We will guide you to the resources that are available to you.
- On Saturday, everyone will present how far they got AND their favorite piece of code that they wrote for everyone to share in the Glory!
- MOST OF ALL HAVE FUN!!!!!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/#header-and-footer) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/5.0/forms/overview/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student array and move them to Moldy Voldy's Army.

In the end, your app will look something like: 

![screencapture-drt-sorting-netlify-app-2022-04-23-14_28_47](https://user-images.githubusercontent.com/29741570/164943525-d20275be-c312-42d1-9730-0c1fd3fd9834.png)


<!-- [See Demo](https://drt-sortinghat.netlify.app/)
 -->
## Technical Requirements
- You MUST plan your project and create issue tickets and a project board for your project
- You MAY use the `renderToDom()` function that we worked on in class, but you also need to be able to explain it if you use it
- You have to create a data structure for your project. Review all the elements that need to be on the DOM and create the structure accordingly
- You must use [Boostrap](https://getbootstrap.com/) to style your page components
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `startApp()` function
- Your code MUST be YOUR code. Do not copy and paste code into your project. Type every bit of it out
- Your HTML and JS should all have proper indentation
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.
- Add filter buttons to filter the non-expelled students by house

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your `renderToDom()` function.  Double hint - put a unique id in the student object when you create them.

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Sorting/Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)

## What I Learned From Planning
- I used Mockaroo for the first time to generate my data. I learned a lot about Mockaroo by using Google including how Mockaroo has its randomizer which made creating data with random house assignments easy. The only thing I had to go back and update were the student pictures. I couldn't figure out how to get pictures of people to generate with Mockaroo, but this website did most of the work for me in creating my data, so THANK YOU Mockaroo
- I used Figma by myself for the first time for this project. Figma is great! I was able to put my "vision" on "paper". I will admit that my final product's layout isn't exactly the same as what I created in Figma, but there are definitely elements I kept. That being said, I referenced Figma plenty of times when working on the HTML and CSS to get things looking how I wanted them to. It was time well spent in planning.
- Break steps into small, small pieces. I spent most of Saturday planning my project before touching a line of code. I wanted to get my idea out and plan what I could foresee. In my GitHub, I created a "project" with this project broken down into small steps. It helped me think through the project to get a fairly clear idea of how I was going to accomplish the technical requirements. Most of my "to do" cards were fairly manageable, but I had a couple that I needed to break down even further after writting a bit of code, so I did which helped me move forward.
- Now this one I didn't learn from planning, but I wanted to have it here: Ask for help and not 2 hours after you tried to problem solve it. During my project, I was struggling to filter my card properly. I felt like my filter logic was correct, but what was being rendered to the DOM was not what I was expecting. I read through my code so many times trying to figure out where I misspelled something or let something out, but I couldn't find it. I went to Google, but still couldn't find my answer. All this time, I was telling myself, "Just put in a help ticket". I was at war with myself saying I could figure out the problem or it would be embarassing to show admit that I was only at the filtering portion of the project, but I pushed through all those negative thought that were trying to hold me back, swallowed my pride and put in a help ticket. Dr. T had me in her breakout room so fast and figured out the problem in less than 10 minutes. That's how easy it was to move forward. Lesson learned: Don't sit on a problem too long and just put in the help ticket.
