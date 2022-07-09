# Service that manages and routes shortened urls for the users

## Environment variables
DATABASE_URL - With a format is: databaseType://user:password@host:port/database
HOST_URL - Value without slash. Example: "http://link.tomondre.com"
## Initial setup
If the database is not initialized, 'npx prisma migrate dev --name init' command needs to be run in order to create tables 

## TODO
- Find a way how to generate shorter ids in Prisma ORM
- Create parser and a class for the user data
- Save user data into database