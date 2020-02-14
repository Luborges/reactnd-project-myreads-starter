# MyReads Project

This is a project develop as part of the Udacity: React Nanodegree program. 

Get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   │── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├──components
    │   │──Book
    │   │   ├──index.js # Index of Book component
    │   │   └──style.css # Style of Book component
    │   ├──Select
    │   │   ├──index.js # Index of Select component
    │   │   └──style.css # Style of Select component
    │   └──Shelf
    │       ├──index.js # Index of Shelf component
    │       └──style.css # Style of Shelf component
    ├──views
    │   │──Home
    │   │   ├──index.js # Index of the Home screen
    │   │   └──style.css # Style of the Home screen
    │   └──Search
    │       ├──index.js # Index of the Search screen
    │       └──style.css # Style of the Search screen
    ├── App.css # Base style for the app.
    ├── App.js # Root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Images used at the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Index of the app, used for DOM rendering.
```

## Backend Server

Provided as received from the original template repository. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
