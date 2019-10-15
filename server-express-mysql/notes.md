# Only run once
sequelize init

# Create a new table
sequelize model:generate --name users --attributes UserId:integer,FirstName:string,LastName:string,Username:string,Password:string

sequelize model:generate --name bands --attributes UserId:integer,BandId:integer,Name:string,ContactPerson:string,Genre:string,ZipCode:integer

sequelize model:generate --name bandRatings --attributes BandId:integer,VenueId:integer,Rating:integer,Review:string

# Only run once to create the DB
sequelize db:create

# If you add more tables you need to run these commands in order
makemigration --name initial_migration

sequelize db:migrate