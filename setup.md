To start this project

First setup the db:

in the root folder:
```
docker-compose up -d
```
When this is done goto:
```
localhost:8081
```
and login with:

User: root
Password: admin

create a new database called "cart"

go to this database and import the SQL file from root

then go into the /api folder and run

```
npm install -D
```

and then

```
npm run dev
```

then go back to the root folder and go to the /shoppingcart folder

then run

```
npm install
```

then

```
npm run serve
```

the project is now ready for use

visit
```
localhost:8080
```

for the shoppingcart application