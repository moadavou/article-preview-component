# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Setup & Usage](#setup--usage)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./preview.png)

### Links

- Repository URL: [GitHub](https://github.com/moadavou/article-preview-component)
- Live Site URL: [GitHub Pages](https://moadavou.github.io/article-preview-component/)

## Setup & Usage

After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies have been installed, you can run `npm start` to access the website's live server in your browser. You will then be able to access it at [localhost:3000](http://localhost:3000).

When the project is ready for deployment, run `npm run build` to compile the scss and sass files to css, minimize, autoprefix, and purge unwanted classes.

### Available Scripts

| Script           | Effect                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| **sass:build**   | Compiles SASS files.                                                                               |
| **sass:watch**   | Watches SASS files for changes and compiles them.                                                  |
| **server**       | Starts a development server with BrowserSync.                                                      |
| **start**        | Watches SASS files for changes and compiles them and starts a development server with BrowserSync. |
| **purgecss**     | Removes unused CSS based on HTML and JS content.                                                   |
| **postcss**      | Applies Autoprefixer and CSSNano optimizations to CSS files.                                       |
| **build**        | Runs a complete build process including SASS compilation, CSS purging, and optimization.           |
| **lint**         | Checks the codebase for linting issues using ESLint.                                               |
| **lint:fix**     | Fixes linting issues where possible using ESLint.                                                  |
| **prettier**     | Checks for formatting issues using Prettier.                                                       |
| **prettier:fix** | Fixes formatting issues using Prettier.                                                            |
| **format**       | A complete codebase format and lint fix using Prettier and ESLint.                                 |

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

* [CUBE CSS](https://cube.fyi/) - CSS methodology
* [Sass](https://sass-lang.com/) _(v1.77.2)_ - CSS pre-processor

### What I learned

I encountered some challenges with positioning the image and the popup for this project. I attempted to make the image adjust its size based on a parenting div, but I struggled with it. The image overflowed its container on mobile, while on larger screens, it appeared too small. Eventually, I opted to move all the styling directly to the image, which I have found to be an easier approach based on my past experience.

Working with `position: absolute;` elements for the popup was difficult for me as I'm not accustomed to it. It involved a lot of trial and error, and I realized that I need more practice with these kinds of elements. Additionally, I encountered issues with the popup on larger screens because it had to overflow the card. I initially set an `overflow: hidden;` on the card to automatically adjust the border radiuses of the elements on top of the card, but this approach didn't work due to the popup. Looking back, I could have planned this aspect better to save myself some time.

Surprisingly, working with JavaScript was not difficult. Although I'm not used to the syntax and had to look up a few things, overall, it went smoothly.

The biggest challenge I faced was dealing with the popup. It doesn't follow the typical disclosure or modal patterns as it overlaps other elements on the page. I wanted to ensure that the popup didn't render the other content on the page inaccessible, so using a modal pattern was not an option. With assistance from a senior developer, I experimented with the `<dialog>` element to prevent access to the content behind the popup when it was open. However, I encountered issues with keyboard focus on smaller screens.

Ultimately, I decided to use the `inert` attribute on the content behind the popup when it was active on mobile. Additionally, I made sure that the focus remained on the button when the popup opened, making it easier to close.

### Continued development

I need to work more with JavaScript (to get used to the syntax) and absolutely positioned elements. I feel like I lack experience in these parts of front-end development.

### Useful resources

- [CSS Triangle](https://css-tricks.com/snippets/css/css-triangle/) - This helped me understand how to create a triangle in CSS and why it works.
- [Using Prettier and ESLint for JavaScript formatting](https://blog.logrocket.com/using-prettier-eslint-javascript-formatting/#eslint-prettier-initial-configuration-basic-usage) - The article helped me understand how to add ESLint and Prettier to a project using Node.js.
- [Let's Build an Accessible Disclosure](https://fedmentor.dev/posts/disclosure-ui/#styling-with-a11y-in-mind) - I used this guide as a foundation for creating the popup using a disclosure pattern.

## Author

- Frontend Mentor - [@moadavou](https://www.frontendmentor.io/profile/moadavou)
- LinkedIn - [@moadavou](https://www.linkedin.com/in/moadavou/)

## Acknowledgments

- [Grace Snow](https://github.com/grace-snow) was very helpful in showing me how to make the popup accessible.
