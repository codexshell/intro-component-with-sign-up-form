# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![desktop screenshot of the website](./screenshot.png)

### Links

- Solution URL: [source code](https://github.com/codexshell/intro-component-with-sign-up-form)
- Live Site URL: [website](https://intro-component-with-sign-up-form-kohl-zeta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Svelte](https://svelte.dev/) - JS library
- [SvelteKit](https://kit.svelte.dev/) - Svelte framework

### What I learned

- Client side form validation
- How to disable browser form validation using `novalidate`, `form` attribute
- Using JavaScript to handle client side form validation (Constraint Validation API)

### Continued development

- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#different_types_of_client-side_validation)

- [Conventional Commits](https://www.conventionalcommits.org/en/)

### Useful resources

- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#different_types_of_client-side_validation) - This allowed me to use purely JavaScript to handle client side form validation. I really liked this pattern and will use it going forward.
- [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) - This mdn documentaion allowed me to make a shallow copy of an array like object. This provides the ability to use higher order array methods

## Author

- Website - [Silvanos Eric](https://codexshell.github.io/)
- Frontend Mentor - [@codexshell](https://www.frontendmentor.io/profile/codexshell)
- Twitter - [@codexshell](https://twitter.com/codexshell)
