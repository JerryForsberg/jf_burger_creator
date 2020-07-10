# jf_burger_creator
The purpose of this app is to let the user input information(a type of burger) and send that information to a database that holds all the information for future reference. 

The user will add a burger, which will then be appended to the page using POST and GET. If the user chooses to devour that burger, they will click the devour button. It will then be placed in a list on the right side of the page that says it has been devoured.

The technologies included in this app include the following:
  - Javascript and Jquery
  - Mysql
  - css
  - html via handlebars
  - node with npm packages: express, mysql, express-handlebars
  
  The folder structure is:
   
   
    - config: 
      - connection.js which sets up the connection to the mysql database
      - orm.js creates the methods to make calls to the database to select all the rows,               insert one row, or update a row
     
    - controllers:
      - burgers_controller are where we are using the express router and the burger model           to get, post, and put 
    
    - db:
      - showing the mysql code that was used to create the database.
      
    - models:
      - The burger.js file is taking the methods created in the orm file and inputting                 the values from the database 
      
    - public/assets: 
      - css - for styling
      - images - for the burger icon
      - burger_handling.js - for the button click Jquery functionality
      
    - views
      - layouts - the main.handlebars sets the template for all of the webpages, using the         css file and burger_handling.js for styling and button functioning
      - partials - the devoured partial creates a button for each burger whether they have         been devoured or not.
      - index - The index sets up the two lists for the burgers that are devoured and not           yet devoured
      
    - Server.js
     - creates our server, the middleware, and sets up the app to use the handlebars files.
      
