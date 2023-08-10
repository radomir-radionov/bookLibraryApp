for migrating use  
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string etc  
"db:migrate": "npx sequelize-cli db:migrate" - need to invoke every time when migtatings are changed
