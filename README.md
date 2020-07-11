# Starting Project
## Basic starting project
To start this node project, dont forget to install the node packages
```
npm install
```
# Serverless
First, install dynamodb local
```
npm run dynamodb:install
```

Test the dynamodb to see if everything is fine
```
npm run dynamodb:start 
```

If dynamodb is ok, you can start the serverless local
```
npm run dev
```


# Sample of serverless.js framework
For simples lambda, see the src/hello/hello.js. It has 2 exports, hello and world.
On serverless.yml see the markup "# Simple Lambda Test"

# Advanced
To more advanced example, I build a lambda with facade technic to improve reuse.
This will permit a lot of cruds without a lot of duplicated code, only handler and call

## DynamoDB
This project use aws dynamodb as database.
To improve the db validation and model, it use dynamoose

## Controller Facade
on folder src/template with Controllers Facade. With this, you can create a lot of crud easefull.

## Database Facade
The Database Facade have all Database requests, it has the responsability to call dynamoose commands or other if it change

## Workflow
The API gateway is called, run the lambda handler, this lambda handler call facade controller sending the db facade.
The facade controller call the db facade function to call the database model

handler > Controller Facade > DB Facade > dynamoose

ex:
if call create product handler, the workflow will be:
product/create > template/create > databaseFacades/ProductFacade > databaseFacades/DBFacade > dynamoose (using databaseSchema/ProductSchema)
