#### "Book library" is a library for storing, booking and commenting books. For example, if you have your own library with a lot of books, you need to keep all the information on paper, but this app can help you. And provide a web solution for this.

**_Don't forget about star_**

## The technology stack:

- client:

  - React, Typescript
  - Redux Toolkit, Redux-Saga
  - Styled Components

- server:

  - Node.js, Koa.js
  - PostgreSQL, Sequelize
  - JWT

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
4. Access control is using `JWT`, which includes access and refresh tokens.

### Project installation

- './install_project.sh' - to init base project config

### file/folder structure

`api` folder houses the entities and their respective handlers.
Each entity has files like `index.js`,`routes.js`, `handlers.js`, `entityName.js`,

- `index.js` to export of entity
- `routes.js` to define routes and their handlers for entity
- `handlers.js` to keep handler for a route
- `entityName.js` to keep some business logic

`config` folder keeps some configuration  
`constants` folder keeps usefull constants  
`database` folder keeps all settings for database, each db has its own folder and appropriate folder/file structure  
`helpers` folder keeps some helpers. These functions can be designed to assist other classes, modules, or components in performing specific tasks. They could be dynamic(it means that these helper functions can be flexible and adaptable to different situations) in nature and related to specific controllers when needed. Helpers may contain methods to parse some user posted payload, modify it before storing it to the Database, etc.  
`middleware` folder keeps some middlewares  
`mock` folder keeps some mock data  
`samples` folder keeps some samples  
`services` folder contains various services for different aspects of this application. Services keep various service-related functionality
`utils` folder keeps some utils. These are the so-called utility or “pure” functions. You pass them an input and they simply mutate it and return an output. They are called utility because you can use them in multiple parts of your system, regardless of the business logic behind them. Notable examples are date conversion or encryption/ decryption of functions. They have no relevance to other classes/files, as opposed to helpers which may help other classes or modules in your app.
`auth` folder contains authentication. Authentication is a fundamental aspect of my application that doesn't quite fit into the services structure, so I made a decision to place the `auth` directory at the root level, alongside the `api` and `services` directories. This approach gives authentication a more prominent place and doesn't tie it directly to the services directory.

![image](https://user-images.githubusercontent.com/66359081/227992921-0d87e337-a8fb-4cae-99f9-78041ece5563.png)

src: https://drive.google.com/drive/folders/1cvz-B15d51kwQpbgaY8qrA_y3VWgnq3Z  
figma: https://www.figma.com/file/d8LhhLjMkaTfPvAcYQULNv/Library---students-file?node-id=3601%3A32186&mode=dev
