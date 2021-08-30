<div align="center">
  <img src="./all-locations-repo/public/logo192.png"></img>

  <h1 align="center">Tymeshift - React</h1>
  <p>Introduction to Tymeshift's react code test 🧪</p>

</div>

<br>
<br>

_In this file I will documentate my work, of all the subjects I would like to share with you. I know it's so much to read ;) but I think we've got to take smarts decisions and as I truly believe on bests practices we can make, I think that the communication is an important key to success_

**First, I would like to thank you for that challenge. I didn't wanted to complicate things but I took this test as good opportunity to practice a lots of topics in a kind of "real professional world scenario"". I hope you will appreciate.**

<br>
<br>
<br>

---

## Table of contents

- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
- [First Thoughts](#first-thoughts)
- [The UI](#the-ui)
  - [The Road to a design system](#the-road-to-a-design-system)
  - [What's next](#whats-next)
- [React & Typescript](#react--typescript)
  - [The choice of the structure](#the-choice-of-the-structure)
  - [About components](#about-components)
  - [Unit tests](#unit-tests)
  - [Needs of refactoring](#needs-of-refactoring)
  - [**NOTES:**](#notes)
    - [About GET DATE UI FORMAT function](#about-get-date-ui-format-function)
    - [About the use of REDUX](#about-the-use-of-redux)
- [Conclusion](#conclusion)

<br>
<br>

---

## Introduction

Even if it's a small app test I taken the decision to think the app as far as I could, **to put it in the context of a large and scalable application**.

I've tried to implement the app in a project focusing on principles like:

- some reusable components
- a structure well organized
- build of a CSS in Js library to provide
- a control of our code logic and types
- a build of a scalable architecture
  ...

Of course we can go deeper on this way and that's the purpose.

<br>

---

## First Thoughts

Before to start this kind of challenge, I clearly needed to take some time to focus about the app's architecture that was expected. The code have some needs, in terms of scalability, quality, performance and by my position of junior, I attempted to give you an approach.

<br>

---

## The UI

**For the CSS, I choose to use `styled-components` with customs styles and the implementation of `material-ui` package**, depending of what choices designers want to make of course.
I am assuming that Tymeshift made some strong decisions about design, and I wanted to continue this way...

### The Road to a design system

_I started working with this in mind.._

I took the initiative to implement the CSS in Javascript with **an approach which gives opportunity to grow, reuse and manage our code keeping up a well organization**.

_We are aware of this kind of organization can scale. I just initiate the work..._

**1. Implementing globals, utilities styles on a `utils/css` folder** (could possibly have a theme, a grid system and so much...)
**2. Keeping the possibility to use any additional package for styling** as I do using MaterialUI.
**3. Having a real component approach even for our styles**, thinking to keep the files architecture well organized.

<br>
<br>

### What's next

With this approach we can **work closer to the designer team, focusing on "Branding" and so, having a better feedback from the users experience**.

_It can be implemented step by step without problem, scaling with time...and we sure have that choice to do more such as:_

- **applying the BEM methodology** approach with the `styled-components-modifiers` package
- taking the next step, **handling the optimized icons and images as styled components** in a properly way
- **thinking in terms of system** following the good practices of design in the web such as the atomic design or web responsive(typo, layout)
- **going deeper with story book**, I have to read the docs on that topic.

- and so much...

_I just wanted to add this perspective as a possibility. We agree that in a real world scenario, it matter to know of what choice we can do or not.._

I wanted to deliver on time, that's why, the `css` seems to be sometimes a little bit confused.I worked on the "sketch" files using "Figma". **I didn't had so much info on the mockup, without communicating with teams and of course, it wasn't the main goal of this challenge**.

<br>
<br>

---

## React & Typescript

_I choose the React & Typescript implementation for this challenge, attempting to deliver a simple, well organized files architecture...._

### The choice of the structure

Without the use of Redux, I attempt to find a well organized files architecture which, of course, can be different or better...

Some comments:

- **assets & utils**: I was wondering if I did have to put the `assets` folder within the `utils` such as the example. I took the decision to not...

```sh

├── utils
│   ├── assets
│   ├── css
│   └── helpers
```

- **api**: Isolating the API 'stuffs' to handle the api connection and the calls at the App's top level. This way we can configure `Axios` and create requests with an object to handle CRUD...

- **components**:
  - **About styled components,** I think it would be great to build some simple, reusable components as pattern (modal, card), following the logic of [the UI section](#the-ui).
  - I was wondering to **create a location folder** centering all files about `location` as `location-modal`, `location-card`, tests and maybe a `location-container`...
    I think I will refactor and continue the challenge on this way.

```sh
├── components
│   ├── App
│   ├── card
│        ├── test
│        ├── card.tsx
│        └── card.styles.tsx
│   ├── modal
│        ├── test
│        ├── modal.tsx
│        └── modal.styles.tsx
│   └── location
│        ├── test
│        ├── location-card
│        └── location-modal
├

```

- **hooks**: some custom hooks
- **mocks**: mock service worker plugin (to set up)
- ...

<br>
<br>

### Unit tests

That's **the bad point** to me for this challenge. I struggled a little bit with Typescript, so **I read documentations and I lost time**.

**But that was a pleasure to work on that small app** and I will go deeper to continue on, mainly with those tests suites...

_My wish was to deliver on time, to follow the requirements._

<br>
<br>

### Needs of refactoring

There's a need of refactoring, I will, on the next days establish a list of priority on tasks to do...

<br>
<br>

---

### **NOTES:**

#### About GET DATE UI FORMAT function

_I've noticed the kind of tricky exercise to display in a right way the data text content for the "createdAt" API's field._

I use this algo as an utility function. I didn't wanted to mix up CSS/JS and pure JS files, so I decided **to extract that function in an `helpers/` folder on `src/utils`** as I've done it with the `css` folder.

I struggled with that `getDateUIFormat()` function in term of performance. I was wondering about **how to approach that problem in a better way with javascript**, dealing with closure, memory pointer, scope, execution context and hoisting.

It need to refactor that function to avoid mutable data and researching if there is another simplest way to implement it...

<br>

#### About the use of REDUX

I am pretty sure that **Redux could be a great choice in that context**. Redux is an amazing tool to manage complexity in a simple way. I've started to implement on that challenge, but on the readme file, I saw that was not on the requirements. I would not want to take some useless risks giving to all of you that image of me.

_I just wanted to respect the requirements._

**I definitively agree about the uses of that pattern which is helping us to manage a complex project with simple principles**...However, if I had made that choice to implement Redux with Typescript, I would have not been sure to deliver on time too.

I prefered take the challenge respecting the deadline.

<br>
<br>

---

## Conclusion

Finally, following this initiative, we should definitively make some changes...

And, thinking in terms of clean code, I know there's some much to do and that's fine, I will work on it.

**I personally attempt to work keeping those principles in mind**, even it's kind a tricky doing this alone without feedback for now.

Knowing that if I didn't have all the answers on my hand for this project, I've made my personal choices, according with the skills and the time I had to make this code test real.

I gave my approach, hoping you will appreciate.

Thank you.
