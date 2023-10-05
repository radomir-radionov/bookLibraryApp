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

1. Has developed Authorization/Registration, `JWT`.
2. Validation is realized with `react-hook-form` and `yup`.
3. Step-by-step authorization.
4. User's personal account(name, description, avatar and more yet) with the ability to edit.
5. Screens include: `Routing`, `Searching`, `Sorting`, `Filtering`, `Pagination`.
6. A book page is a page with detailed information and the ability to review and re-review a current book.
7. Ability to booking and delivering a book. This ability is provided through the calendar and more.
8. Ability to recover the password through the message on the email.
9. This app uses `swiper` for sliders.
10. More than 100 tests have been written to test(e2e) the application using `Cypress`.

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
