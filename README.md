# loopback_api_example

Hi Everyone! This is the example API connect with DB MYSQL of **Loopback4**.

# Structure
![Capture](https://user-images.githubusercontent.com/47916220/76541774-a7303000-64b6-11ea-9f80-2b3649560935.JPG)

# Tutorial
## Set up
### Install Node.js version 8.9 or higher
See the [Node documentation](https://nodejs.org/en/download/) for installation instructions.
### Install LoopBack 4 CLI
	npm i -g @loopback/cli

## Create An Loopback 4 Application

Run the command as followed:

	$ lb4 app
	? Project name: loopback-api-example
	? Project description: An example API made with LoopBack 4.
	? Project root directory: (loopback-api-example)
	? Application class name: (LoopbackApiExampleApplication)
	? Select features to enable in the project:
	❯◉ Enable eslint: add a linter with pre-configured lint rules
	 ◉ Enable prettier: install prettier to format code conforming to rules
	 ◉ Enable mocha: install mocha to run tests
	 ◉ Enable loopbackBuild: use @loopback/build helpers (e.g. lb-eslint)
	 ◉ Enable vscode: add VSCode config files
	 ◉ Enable docker: include Dockerfile and .dockerignore
	 ◉ Enable repositories: include repository imports and RepositoryMixin
	 ◉ Enable services: include service-proxy imports and ServiceMixin
	 # npm will install dependencies now
	 Application todo-list was created in todo-list.

All your files and folders will be  generated as a tree in the file explorer, for example:

	src/
	  __tests__/
	    acceptance/
	      home-page.acceptance.ts
	      ping.controller.acceptance.ts
	      test-helper.ts
	    README.md
	  controllers/
	    index.ts
	    ping.controller.ts
	    README.md
	  datasources/
	    README.md
	  models/
	    README.md
	  repositories/
	    README.md
	  application.ts
	  index.ts
	  migrate.ts
	  sequence.ts
	public/
	  index.html
	node_modules/
	  ***
	LICENSE
	README.md
	DEVELOPING.md
	index.js
	index.ts
	package.json
	tsconfig.json
	tsconfig.tsbuildinfo

Then execute this command to adding DB connector

	cd loopback-api-example
	npm install loopback-connector-mysql --save
>**Note:** For more information of DB connector that fit with your project please read [here](https://loopback.io/doc/en/lb4/Database-connectors.html)

# Create an Account model
> **Note:** The **model** is a class mapping with the structure of the table in database to make sure you mapping data type is correct please visit [Type mappings](https://loopback.io/doc/en/lb4/MySQL-connector.html).
> [More about Model](https://loopback.io/doc/en/lb4/Model.html)

	$ lb4 model
	? Model class name: Account
	? Please select the model base class Entity (A persisted model with an ID)
	? Allow additional (free-form) properties? No
	Model Account will be created in src/models/account.model.ts

	Let's add a property to Account
	Enter an empty property name when done

	? Enter the property name: account_id
	? Property type: number
	? Is account_id the ID property? Yes
	? Is account_id generated automatically? Yes

	Let's add another property to Account
	Enter an empty property name when done

	? Enter the property name: account_name
	? Property type: string
	? Is it required?: Yes
	? Default value [leave blank for none]:

	Let's add another property to Account
	Enter an empty property name when done

	? Enter the property name: account_email
	? Property type: string
	? Is it required?: Yes
	? Default value [leave blank for none]:

	Let's add another property to Account
	Enter an empty property name when done

	? Enter the property name: account_type
	? Property type: string
	? Is it required?: Yes
	? Default value [leave blank for none]:

	Let's add another property to Account
	Enter an empty property name when done

	? Enter the property name: created_date
	? Property type: date
	? Is it required?: Yes
	? Default value [leave blank for none]:

	Let's add another property to Account
	Enter an empty property name when done

	? Enter the property name: updated_date
	? Property type: date
	? Is it required?: Yes
	? Default value [leave blank for none]:

	Let's add another property to Account
	Enter an empty property name when done

	? Enter the property name:
	   create src\models\account.model.ts
	   update src\models\index.ts

	Model Account was created in src\models/

## Create a datasource
> **Note:** The Datasource is the place you will have to configure the connection to your DB in this case is MySQL. [More about Datasource](https://loopback.io/doc/en/lb4/DataSources.html)

	$ lb4 datasource
	? Datasource name: mysql_db
	? Select the connector for mysql_db: MySQL (supported by StrongLoop)
	? Connection String url to override other settings (eg: mysql://user:pass@host/db): mysql://HhEMnBvWOL:ujYmlvZZI5@remotemysql.com/HhEMnBvWOL
	? host: remotemysql.com
	? port: 3306
	? user: HhEMnBvWOL
	? password: [hidden]
	? database: HhEMnBvWOL
	   create src\datasources\mysql-db.datasource.config.json
	   create src\datasources\mysql-db.datasource.ts
	   update src\datasources\index.ts

	Datasource MysqlDb was created in src\datasources/

## Create a repository
> **Note:** Repository is the class that will interact with model to make transaction and action to your data in real table from DB. [More information about Repository](https://loopback.io/doc/en/lb4/Repositories.html?_ga=2.77062940.864054677.1584025223-1191295922.1584025223)

	$ lb4 repository
	? Please select the datasource MysqlDbDatasource
	? Select the model(s) you want to generate a repository Account
	? Please select the repository base class DefaultCrudRepository (Legacy juggler bridge)
	   create src\repositories\account.repository.ts
	   update src\repositories\index.ts

	Repository AccountRepository was created in src\repositories/

## Create a controller
> **Note:** Controller as we already know is the place we define the end point of API, navigate to another repositories to get of put data from client. [More about Controller](https://loopback.io/doc/en/lb4/Controllers.html)

	$ lb4 controller
	? Controller class name: account
	Controller Account will be created in src/controllers/account.controller.ts

	? What kind of controller would you like to generate? REST Controller with CRUD functions
	? What is the name of the model to use with this CRUD repository? Account
	? What is the name of your CRUD repository? AccountRepository
	? What is the name of ID property? account_id
	? What is the type of your ID? number
	? Is the id omitted when creating a new instance? Yes
	? What is the base HTTP path name of the CRUD operations? /accounts
	   create src\controllers\account.controller.ts
	   update src\controllers\index.ts

	Controller Account was created in src\controllers/

## Database
In this example i would like to introduce to you one of the tool that i like to use i found out it good to make those tutorial and example like this. Event for now it is just the demo but it actually convenience for who don't want to setup the MariaDB, configuration and test...
Yes! It is **[https://remotemysql.com/](https://remotemysql.com/)**

I did try to create an account and setup an DB as their instruction, simple, fast and convenience. At the end i got an online DB that i can access from anywhere as long as i got the internet. It also provide you an [PhpMyAdmin](https://remotemysql.com/phpmyadmin/) online too.

### DB information as follow:

	Username: HhEMnBvWOL
	Database name: HhEMnBvWOL
	Password: ujYmlvZZI5
	Server: remotemysql.com
	Port: 3306

### SQL:

	CREATE TABLE `account`
	(
		`account_id`    INT NOT NULL auto_increment ,
		`account_name`  VARCHAR(20) NOT NULL ,
		`account_email` VARCHAR(50) NOT NULL ,
		`account_type` ENUM('admin','user','developer') NOT NULL ,
		`created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
		`updated_date` DATETIME ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT 	CURRENT_TIMESTAMP ,
		PRIMARY KEY (`account_id`)
	)
	engine = innodb;

> **Note:** I use this for the tutorial so i don't put any strictly information here but if you want to use this in your company or anything please make sure you were **approved** by your company for security reason!!!

# References:
- [https://developer.ibm.com](https://developer.ibm.com/technologies/node-js/tutorials/create-rest-apis-minutes-with-loopback-4/?fbclid=IwAR0j1xnDkfCrwVtnWuuVFvx_lnSBj8vRLI6h2_bCR0LKq4peeERCZNusXFc#create-the-to-do-model)
- [https://loopback.io](https://loopback.io/doc/en/lb4/index.html)
