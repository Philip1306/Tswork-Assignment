# Tswork-Assignment
Created a Rest API which accepts date as Input and return stock values in json format.

Firstly I am using MySql for my database and NodeJS for the creation API. The table is been created and imported through table import wizard available in the workbench itself.
The API created follows the MVC pattern. Stating with the dependencies used were express for JS, mysql2 for db querrys, nodemon for refreshing the server on changes, body-parser
for taking input as a form from API.

Talking about code, the routes folder contains stocks.js which is responsible for connecting the methods in the controller. The controller folder contains stocks.js file which consist 
of function definition for both geting the data as well as post the result. View folder has stock-input html file which takes the input. Util folder has database.js flle which 
has the connection detail of the DB.

The Output snippets and the MySql DB snipets are available in results.pdf file 
