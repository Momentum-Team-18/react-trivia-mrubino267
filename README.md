[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/OTohjJHr)
# React Trivia Game

For this project, you will use React to build a trivia game powered by [the Open Trivia Database](https://opentdb.com/).

This project does not include any wireframes: you will have to design the game yourself. 

One way to implement this is to present the user with a list of categories. A user can choose a category, and then answer questions within that category. That's not the only way you could do this; you're welcome to be creative.

## Skills you're building in this project

Doing this project, you will...

- Plan and build an application that needs multiple components
- Gain more experience using state in React
- Fetch data from a third-party API and use it in your React application
- Understand React data flow

## How to start

### Thoroughly investigate the API you're using

You will need to spend time understanding the [Open Trivia Database API](https://opentdb.com/) to see what kind of data you are working with and the different options that the API gives you. This might give you some ideas for things you want to do in your application. Notice that there are different URLs (in an API we refer to these as _endpoints_) that return different kinds of data. You'll need to make at least two API requests for this project.

### Sketch out the application

[Wireframe](https://balsamiq.com/learn/articles/what-are-wireframes) your design before you start building. Wireframing is about organization and functionality, not about styling; it's a sketch that helps you start breaking down the project into separate parts that you need to build. When you sketch, start with what the user will see on the page at different points in their interaction with your application. Then, consider how your user will interact with your application.

### Plan components

Figuring out what you want the user to see and do will help you plan the components you need. Things that change on the page as a result of fetching data or user interaction are things that belong in state in React. 

You may want to start with one big component that you then break down into smaller ones. A good way to think about this: each component should have one job.

You should outline this on paper (or a Google doc, or whatever) before you start writing code.

### Scaffold the application with Vite

Create a new React application using [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). When you are ready to write code, your first task should be **getting categories to show up on the page**.

Once you have a list of categories showing, give your user a way to select a category. When a category is selected, a user should see questions for that category.

At each step, think about what the user wants to do. After they select a category, what will they see and do? How will the application respond to their interactions?

## Definition of Done

This list is not necessarily in the order in which you should build these parts of the application.

- When the application loads, a user can see a list of possible trivia categories so that they can choose one to start a quiz in that category.
- A user can select a category and start a quiz in that category. A quiz should have at least 10 questions in it.
- A quiz shows the user one question at a time, with its possible answers.
- The possible answers for a question are shown in a random order so that the correct answer isn't in the same place every time.
- A user can select an answer to a question and can see some visual feedback that they selected an answer.
- After a user completes a quiz, they can see how many questions they answered correctly, or some kind of score, when they have answered all the questions in a category. (Optionally, show them which questions they got right and which ones they got wrong.)
- After a user selects their intended answer, they are shown the next question in the category.

## Project Requirements

- The application makes use of 3 or more components.
- The application has two or more "screens." In a traditional web application, we'd think of these as different pages.
- The application uses React's state to manage data.
- The application uses the Open Trivia Database API.
- The application is styled in a way that enhances its usability and functionality.
- The application includes at least one one spicy option from the list.

## 🌶️ Spicy Options

Once you have the minimum functionality, you should implement as many spicy options as you have time for. You're also welcome to implement something not on this list.

- Add a [loading indicator](https://uxplanet.org/progress-indicators-4-common-styles-91a12b86060c) so that your UI shows something other than a blank screen while your data is being retreived from an AJAX request.
- Allow users to customize their quiz by choosing how many questions they want to answer and/or choosing a difficulty level.
- Consider using [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store scores so that they will still be there if the page is reloaded.
- Create a win condition and some way to indicate that a user has won. You might want to explore awarding badges, animations or something delightful like [react-confetti](https://github.com/alampros/react-confetti).
- Use animations for interactions and/or transitions. There are many different React animation libraries you could try, but here are a few of the most widely used: [React Framer Motion](https://github.com/framer/motion), [React Spring](https://github.com/pmndrs/react-spring), [React TsParticles](https://github.com/matteobruni/tsparticles), [React Motion](https://github.com/chenglou/react-motion), [React Transition Group](https://reactcommunity.org/react-transition-group/)
- Integrate a timer into your trivia application. For example, you could impose a time limit on answering questions and mark a question wrong if there is no guess before the timer runs out. Or, you could see how many questions your user can answer in a certain amount of time. Consider using local storage to store times and show the user their personal best times.
- Implement a social share feature so your user can easily share their score on social media. This could be as fancy or straightforward as you want it to be.
- Use any React library that looks interesting to you. [Here are some things to browse through](https://github.com/enaqx/awesome-react). [Here are some more](https://github.com/brillout/awesome-react-components).

## About the API

You can learn about the Open Trivia Database API at [this API config page](https://opentdb.com/api_config.php).

Some things you are likely to want to do:

- Get list of categories: https://opentdb.com/api_category.php
- Get 10 questions: https://opentdb.com/api.php?amount=10
- If you add a session token you won't receive the same question twice
    - Get a token: https://opentdb.com/api_token.php?command=request
    - Add a token to a request: `&token=YOURTOKENHERE`
