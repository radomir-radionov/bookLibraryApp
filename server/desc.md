`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string` -create model:User  
`npx sequelize-cli seed:generate --name example-booking` - create a seed`  
`db:migrate": "npx sequelize-cli db:migrate`- need to invoke every time when migtatings are changed

### Problems

- sequelize doesnt use default value **defaultValue: Sequelize.NOW**
- circular dependency between book and delivery models
- delete field updateAt for mostly models

### sequelize

- how i create and where can i find all list of names such as include: ['delivery', 'booking', 'history'],
- do i need create a new migrations when change model or postgres/index.js
