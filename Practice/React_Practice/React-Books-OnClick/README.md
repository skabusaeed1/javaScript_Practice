## React-Books-onClick

### Submission Instructions [Please note]

#### Maximum Marks - 16

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

```
✅ Able to submit the app - 1 mark ( minimum score )
✅ Only Heading and Get Books Button should be visible when component loads - 1 mark
✅ Should make a get request to endpoint when clicked on Get Books button and disappear on UI once clicked on it - 3 marks
✅ Check all types of books are visible only checking no of books - 1 mark
✅ Check all details of the book as mentioned in problem statement are displayed - 2 marks
✅ Onclicking on Borrow button, the button should get disabled and text content should change accordingly and also new button to return should be visible - 3 marks
✅ Clicking on the return button should should show borrow button and it should be enabled - 3 marks
✅ Onclicking on Get Books button Hide Books button is appearing along the books data or not - 2 marks
```

### Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
npm install --engine-strict

// run locally
npm run start
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
  try to keep one submission at a time

## Problem

### Description

- A library needs a website where a user can see a welcome message at the start along with a button `Get Books`.
- On clicking the `Get Books` button, the application should make a fetch request to the API and display all the data in cards using the `BookCard` component and `BookRack` component.
- Initially render `Get Books` button only.
- On clicking the `Get Books` button, the application should make a fetch request to the API and display all the data in cards using the `BookCard` component.

- On clicking the `Borrow` button, the text on the button should toggle to `Borrowed`, and a new button with the text `Return` should appear side of it.
- On clicking the `Return` button, the text on the button(`Borrowed` button) should toggle back to `Borrow`, and the `Return` button should not exist on DOM.
- Map data into `BookCard` component inside `BookRack` component

<div>
<img src="https://i.imgur.com/pvWQ126.png" width="100%">
<img src="https://i.imgur.com/6EgqlIc.png" width="100%">
<img src="https://i.imgur.com/gahQGYm.png" width="100%">
</div>

## Folder Structure

- Components
  - BorrowBtn.jsx (This have button/buttons)
  - BookCard.jsx 
  - BookRack.jsx (here you can fetch the data from API and display it with help of the BookCard component)
- App.js

### BookRack

- Will contain `h1` tag with `Book House` as the title
- A `Get Books` button with `className="get-books"` will exist on DOM initially.
- Button is only visible if Book cards(BookCard.jsx) are not shown and vice versa.
- On clicking the above button, it will fetch data from the API and map it into the container below
  - A `div` tag with `data-cy="container"` ( `data-cy` is similar to `id` / `classname` which we give to any of the tags)
  - You need to create the above div tag. (This will be visible only when the button(`Get Books`) is not visible and vice versa)
  - The above container should contain all the Book details displayed as cards using BookCard component
- When ever `Get Books` button is not exist on  DOM then a button with text content `Hide Books` will be visible with `className="hide-books"` and vice-versa.
  - On clicking on `Hide Books` button the `div` tag with `data-cy="container"` and the button `Hide Books` should not exist on the DOM and `Get Books` button with `className="get-books"` should exist on DOM.(Hinit:- No books will be visible on DOM on clicking on `Hide Books` and Button(`Hide Books`) will not exist on DOM)

### BookCard

- This component should accept each Book's details as props.(title, author , category, isbn as props. see the image above for reference which values are required)
- A `div` tag with `className="book_card"` will be the parent div of this component
- The above div should contain all the properties of the given Book(title, author , category, isbn)
- Show title in `h3`, author in `h5` tag, category in `h6` and isbn in `p` tag.
- Each card should have a `Borrow` button with `className="borrow_book_button"` by default and regarding buttons, you can use the below component.

### BorrowBtn.jsx

- Create a button tag with `className="borrow_book_button"`
- By default, the text content of the button is `Borrow`
- After clicking on the button, the text content of the button should be changed to `Borrowed`, and the button should be disabled.
- A new button with `className="return_book_button"` should appear next to the above button and the text should be `Return`
- After clicking on `Return`, the text content of the button with `className="borrow_book_button"` should be changed back to `Borrow` and should be enabled, and the button with `className="return_book_button"` should be removed from UI.

#### API Url:-

**https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books**

- Use Fetch only.

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to low scores.
- Also make sure to cross-check all the spellings and Cases of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
