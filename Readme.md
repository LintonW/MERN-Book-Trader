# Itunes-Search-API

## Description

A full-stack web application that allows users to sell and buy second-hand books. 
Register and Login. 
Choose to either sell or buy a book. 
In the sell section you can add the book details and view, edit or delete books you have added.
In the buy Section Search for a book by its title.

## Installation
```
cd backend
npm install
npm start

```
```
cd frontend
npm install
npm start

```

Create a '.env' folder with the following : 

```
ATLAS_URI=INSERT MongoDB URI HERE

```

The register component works but please use these login details : 

```
email - user1@gmail.com
password - user1

```

## Software Requirements

Project Description : 
An application where users can buy and sell secondhand books. 
The user can add, edit or delete their secondhand book to the database as well as
search the database to look up information on a secondhand book that has been posted by another user. 
However, the user cannot add, edit or delete another users data.
The admin will be allowed to add, edit or delete any users data in the database.  

------------------------------------------------------------------------------------------------------------------------------------------------------------------

System Architecture :
The architecture that will be used is the MERN stack.

This 3-tier architecture allows for a simple and quick development process using only JavaScript & JSON, 
this means that JavaScript is used both by the client-side and server-side code. 

```
MongoDB (Database)
This NoSQL database is perfect for the task at hand. MongoDB stores data in the form of JSON/BSON, 
which works perfectly with React, Express and Node. Storing, manipulating and representing data 
is made easy with MongoDB and fits well with AGILE development.  

Express and Node (Backend)
Using Node.js and the Express framework makes it easy to handle URL routing and HTTP requests and 
responses. For the task at hand, this is essential when performing CRUD operations which will 
be the key aspect in this application. It is also essential when it comes to communicating 
with the database. 

React (Frontend)
This javascript library for building dynamic client-side applications is fast, simple and scalable.
React is used to develop the user interface as well as manipulating data on the backend.

Styling 
I have chosen to use create-react-app and not Next.js. I have also decided to use simple CSS 
and no frameworks as the application is relatively simple to develop and is not too complicated.
React and CSS are more than capable.  	 	

```

The deployment will be handled by Heroku. The reason for this is because Heroku is fully managed and is perfect 
for modern apps. To deploy, manage and scale is done so with ease and as a developer this is optimal.

The MERN stack is capable of developing the task at hand. Not only is it capable
but it excels in all aspects and makes for easy development. JSON data flows seamlessly from the backend to the 
frontend and as only JavaScript is used it makes the process more simpler. 

------------------------------------------------------------------------------------------------------------------------------------------------------------------

## System Requirements Specification  

Functional Requirements :

```

Register component  
	The user should be able to register their email and username
	The system should add the user to the database

Sign-In component 
	The user should be able to sign in using their email and username 
	The system should validate the user against the database

Main component 
	The system should be able to handle CRUD operations 
	The system should be linked with the API

Sell component 
	The user should be able to add their book
	The user should be able to delete their book
	The user should be able to edit their book details
	The admin should be able to add any book
	The admin should be able to delete any book
	The admin should be able to edit any book details

Buy component 
	The user should be able to search for a book from the database
	The user should be able to see the details of the results
	The user should be able to filter books by "Price"

```

Non-Functional Requirements :

```

Usability 
	The UI should be simple and easy to use 
	The user should be able to perform operations quickly 
	The user error rate should be low

Reliability
	The system should handle most errors
	There should be no critical bugs

Performance 
	The system should register and validate users in less than 5 seconds
	The system should process requests in less than 3 seconds.
	The system should render in less than 6 seconds on an LTE connection when 
	the users are > 1000

Security 
	The users login data should be encrypted with JWT and bcrypt
	The backend should use helmet 
	Users will not be given admin rights 
	
```


User Stories :
1. As a user, I want to be able to sell my secondhand book, to make some money
2. As a user, I want to search for a secondhand book, to purchase it at a reduced price
3. As a user, I want to see the details of the seller, to make an informed choice
4. As a user, I want to see which secondhand book I searched for is the cheapest, so I can save money
5. As a user, I want to enjoy using the software, so I don’t get frustrated.


How I Am Going To Stand Out : 
```
In my research, I have only found one similar application. It is called "Textbook Trader". 
Textbook trader allows users to sell and buy used textbooks particularly from UNISA. 
The average user is most likely a student studying at UNISA. 

I plan to stand out by making an application where a user can sell or buy used books and 
is more generalized where the average user could be anyone who loves books and likes to read. 
The benefit of my app is that new books can be quite expensive, buying a secondhand book
can be cheaper. My idea is similar to OLX and Facebook Marketplace however it 
targets a specific niche - secondhand books. 

I believe that this idea is unique and can be used as a viable idea in real life. 
The simplicity of the application justifies its development. 
```

