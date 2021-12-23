# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge is to build out this landing page and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

Desktop
![](./screenshots/desktop.png)

Mobile
![](./screenshots/mobile.png)

Mobile-menu
![](./screenshots/mobilemenu.png)

Actice-States
![](./screenshots/navactivestate.png)
![](./screenshots/underlineactivestate.png)
![](./screenshots/footerlinksactivestate.png)
![](./screenshots/socialplatformsactivestate.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: []()


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Sass
- JavaScript


### What I Learned

Building this landing page challenge was really fun and educational.

This was the first time that i decided to use semantic Html markup in a project, this taught me that using semantic markup makes your website very accessible and user-friendly.

I've used sass in another project before but it was structured badly and had too many lines of code for one file, this time i learned about partials and using them you can split up your one css file into multiple smaller ones then import them when needed in a file, this turned out a lot more structered than before. Also I learned about mixins.

Using javascript in this project i learned how to create a dropdown menu for mobile devices

```html
<header>
    <figure>
        <a href="#"><img src="./images/logo.svg" alt="logo" class="logo"></a>
    </figure>
    
    <nav class="navbar">
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
```

```sass
@import 'variables';
@import 'typography';
@import 'mixins';
@import 'header';
@import 'main-content';
@import 'client-testimonials';
@import 'img-gallery';
@import 'footer';
```

Mixins for media queries
```sass

@mixin for-size($size) {
    @if $size == phone{
        @media (max-width: 375px){
            @content;
        }
    }
    @else if $size == phoneM{
        @media (min-width: 285px) and (max-width: 335px){
            @content;
        }
    }
    @else if $size == phoneL {
        @media (min-width: 340px) and (max-width: 389px){
            @content;
        }
    }@else if $size == tablet{
        @media (min-width: 390px) and (max-width: 720px){
            @content;
        }
    }@else if $size == desktop{
        @media (min-width: 698px) and (max-width: 945px){
            @content;
        }
    }
}

@include for-size(phone){
        .header-wrapper{
            background-image: url("../images/mobile/image-header.jpg");
            height: 95vh;
        }

        .navbar{
            display: none;
        }

        .mobilebtn{
            display: inline;
            padding-top: 1rem;
        }
}
```

```js
const menuBtn = document.querySelector('.mobilebtn');
const mobilemenu = document.querySelector('.navigationlinks');

menuBtn.addEventListener('click', () => {
  mobilemenu.classList.toggle('open');
});
```

### Continued development

Html
Get better at structuring my website layout.

Css
Get better at using pseudo-elements.
Use

Javascript
I want to improve alot more in javascript in all areas of it.

### Useful resources

- [MSDN](https://www.msdn.com) - This helped me with how to use pseudo-elements to create a underline.
- [Css Tricks](https://css-tricks.com/approaches-media-queries-sass/) - This helped me finally understand how to use mixins for media queries using Sass.


## Author

- Frontend Mentor - [@Duran144](https://www.frontendmentor.io/profile/Duran144)
- Github - [Duran144](https://github.com/Duran144)
- Vercel - [Duran144]()