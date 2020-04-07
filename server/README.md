# express-remote-mongo-template
## Initial Setup
Download the repository, navigate to the containing folder.

You'll need to make a file named ".env" in the root directory.

```
touch .env
```

Inside this file, you'll need to create a DB_URL variable.  In this case I'm using a remote MLAB mongo database.  After making a free sandbox DB, the url will be listed once you click on the newly created database.  You will need to make a new user and password credentials to put in the DB_URL string.  Don't include the <>'s in the DB_URL string.


```
DB_URL=mongodb://<dbuser>:<dbpassword>@xxxxxx.mlab.com:xxxxx/sample-db
```

### Installation and Running the Server


```
npm install
nodemon
```
