# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

### Links

- Solution URL: [Cllick]()
- Live Site URL: [Click]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Display
- CSS Grid
- JS

### What I learned

```css
.click-btn:hover{
  box-shadow:0 0 20px hsl(150, 100%, 66%);
}
```
```js
function main() {
  const apiLink='https://api.adviceslip.com/advice';
  var advId=document.getElementById('advice-id');
  var adv=document.getElementById('advice');
  var fetchData=fetch(apiLink);
  fetchData.then((data)=>{
    return data.json()
  }).then((data)=>{
    advId.innerHTML="Advice #"+data.slip.id;
    adv.innerHTML="\""+data.slip.advice+"\"";
  })
}
```

### Useful resources

- [Example resource 1](https://css-tricks.com/almanac/properties/b/box-shadow/) - This helped me for shadow generating. I really liked this pattern and will use it going forward.

## Author
- Website - [Aman Singh]
- Frontend Mentor - [@aman-abesec](https://www.frontendmentor.io/profile/aman-abesec)
