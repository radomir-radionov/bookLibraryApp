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
