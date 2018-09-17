* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?

	Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

  	- Answer: What advantages does it offer?

	Sequelize allows you to make use pre build orms into your apps, saves time and hair (that you won't pull out)
	Gives you a simple way to write the queries, restrict things, validate things

  	- Answer: How do I install it? How do I incorporate it into my app?

	// Using NPM
	$ npm install --save sequelize
	# And one of the following:
	$ npm install --save pg pg-hstore
	$ npm install --save mysql2
	$ npm install --save sqlite3
	$ npm install --save tedious // MSSQL

  	- Answer: What the heck is a Sequelize model? What role will it play?

	javascript object that represents you tables
	models are templetes for data querys 

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

		  

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
