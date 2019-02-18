# Clicky Game!

Clicky Game! is a react app that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The purpose of this game is for a user to click on images as they shuffle around the screen and only click an image one time. The deployed project can be found on Heroku [here](https://glacial-shelf-69024.herokuapp.com/).

## Functionality

The app loads with 12 images shuffled into a grid. The goal for the user is to click each image once without clicking an image more than one time. For each correct click, the user's score increases and, once they click an image a second time, they lose and the game resets. After each guess, the images are randomly shuffled in the grid to add a layer of complexity.

## Notes

All game functionality is taking place without the page being refreshed. Using React and state management, the updated DOM elements are redrawn from React's 'virtual DOM'. This approach makes the game extremely efficient and responsive.

## Getting Started

1. `yarn install`
2. `yarn start`
3. Click images

## Languages
- HTML 5
- CSS 3
- Bootstrap
- JavaScript
- Yarn
- React.js
- Heroku

## Future Enhancements
A future enhancement would allow the user to change the difficulty of the game by altering how many rows of images are displayed.
