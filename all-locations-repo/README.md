<div align="center">
  <img src="./public/logo192.png"></img>

  <h1 align="center">All Locations Feature</h1>
  <p>Welcome to Tymeshift's react code test 🧪</p>

</div>

## Getting Started

- **clone or download the repo** at `https://github.com/CodeIsaMystic/locations-feature`
- **on the terminal by the command `$ cd all-locations-repo`app** 
- **install dependencies** on`node_modules`with the command`$ npm install`
- **finally run the script `$ npm start`** to launch the app

### About scripts

- **`npm start`** Runs the app in the development mode.
- **`npm test`** Launches the test runner in the interactive watch mode.
- **`npm build`** Builds the app for production to the `build` folder.

<br>
<br>
<br>

## Task description

In our real Tymeshift frontend application we **have an "All locations" page** where we display all the locations where company users are located.
This task is designed to be **a simple version of a real page we use** and to give you a feeling of what your job will look like in Tymeshift.
On the other hand we will be able to check how you handle a real requirement.

**_This is the simplified "All locations" page:_**

![image](https://user-images.githubusercontent.com/50903242/109963912-40221180-7ced-11eb-9bf4-befe6595a1b1.png)

**Implement small react application:**

1. It will display "All locations" page.
2. Clicking on a specific location should display a modal.
3. The modal will display all the properties of that single location.
4. Modal should be closable.

5. Locations on main "All locations" page are displayed with a card showing some of the location properties.
6. Every location card should also contain a section "Views:",
7. The "Views:" section will display the real number next to it & default starting value is 0.
8. Every time the user clicks on a location to display its properties, number of views should increase by 1.

<br>
<br>

---

<br>

**_NOTICE:_**

- All data is read-only and can be retrieved from [this API endpoint](https://6033c4d8843b15001793194e.mockapi.io/api/locations).
- All application pages and components should follow the [provided design](https://www.sketch.com/s/e1647b30-8066-43dc-bbf3-5b81d5a01bb2).

<br>

---

## Rules

- Solution should be **written in React.**
- You can **upload your solution to GitHub or send us a ZIP file** with the solution at hiring@tymeshift.com
- We tried to **create a task with a small scope** but take all the time you need to feel comfortable with your solution and do it at your own pace

---

## What we're looking for

- Is it a **clean solution that is easy to follow**, **respects all the specs and the design.**
- How you **approach and structure** the solution
- How **complete and detailed** is the solution

---

## The Files Structure

```sh
src/
├── api
├── assets
├── components
│   ├── App
│   ├── card
│   └── modal
├── hooks
│   └── useModal.tsx
├── mocks
├── models
├── pages
│   └── AllLocations
├── utils
│   ├── css
│   └── helpers
└── index.tsx
```
