### Project installation

- './install_project.sh' - to init base project config

### file/folder structure

`api` folder serves as of set of entities and their handlers.  
Each entity has files like `index.js`,`entityName.routes.js`, `entityName.handlers.js`, `entityName.js`,

- `index.js` to export of entity
- `entityName.routes.js` to define routes and their handlers for entity
- `entityName.handlers.js` to keep handler for a route
- `entityName.js` to keep some business logic

`config` folder keeps some configuration  
`constants` folder keeps usefull constants  
`database` folder keeps all settings for database, each db has its own folder and appropriate folder/file structure  
`helpers` folder keeps some helpers
`middleware` folder keeps some middlewares  
`mock` folder keeps some mock data
`samples` folder keeps some samples
`utils` folder keeps some utils
