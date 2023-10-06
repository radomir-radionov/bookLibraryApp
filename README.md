#### "Book library" is a library for booking books. For example, if you have your own library with a lot of books, you need to keep all the information on paper, but this app can help you. And provide a web solution for this.

**_Don't forget about star_**

## The technology stack:

- client:

  - React, Typescript
  - Redux Toolkit, Redux-Saga
  - Styled Components

- server:

  - Node.js, Koa.js
  - PostgreSQL, Sequelize

- tools:

  - Git, Docker, DBeaver, Insomnia

### Configuration

App builds using `Docker`.

### Client

`SPA` with client-server architecture.

1. `RWD` with excellent `UX`.
2. To manage state app changes using `Redux Toolkit`. To manage asynchronous logic using `Redux Saga`.
3. Screens have next features: `Routing`, `Searching`, `Sorting`, `Filtering`, `Pagination`.
4. Screens include: `Modals`, `Loaders`, `Toasts`.
5. Has developed Authorization/Registration, `JWT`. Step-by-step authorization.
6. Validation is realized with `react-hook-form` and `yup`.
7. A book page is a page with detailed information and the ability to review and re-review a current book.
8. User's personal account(name, description, avatar and more yet) with the ability to edit.
9. User's opportunities: `Booking` and `Delivering` a book and more. Also, view the history of all the books you've read.
10. Ability to recover the password through the message on the email.
11. This app uses `swiper` for sliders.
12. More than 100 tests have been written to test(e2e) the application using `Cypress`.

### Server

1. Universal and easy-to-scalabal file/folder structure.
2. For every entity created `API` with `CRUD` operations.
3. For organizing collection of structured information uses `Postgres`. Managing through `Sequelize`.  
   Implemented `models`, `migrations` and `seeds`.

## Run app

```
yarn
yarn start
```

![image](https://user-images.githubusercontent.com/66359081/227992921-0d87e337-a8fb-4cae-99f9-78041ece5563.png)

src: https://drive.google.com/drive/folders/1cvz-B15d51kwQpbgaY8qrA_y3VWgnq3Z  
figma: https://www.figma.com/file/d8LhhLjMkaTfPvAcYQULNv/Library---students-file?node-id=3601%3A32186&mode=dev
