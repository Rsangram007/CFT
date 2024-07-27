# Categories & Services API

This API provides authenticated CRUD operations for managing categories and services. It supports JWT token-based authentication and allows users to create, read, update, and delete categories and services.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Categories](#categories)
- [Services](#services)
- [Schemas](#schemas)
- [Running the Application](#running-the-application)
- [Postman Documentation](#postman-documentation)

## Technologies Used

- Node.js
- Express
- TypeScript
- PostgreSQL
- Sequelize
- JWT for authentication
- bcrypt for password hashing

## Getting Started

To get started with the API, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Rsangram007/CFT.git

Navigate to the project directory:
bash
Copy code
cd [repo-name](https://github.com/Rsangram007/CFT.git)

#### Install the dependencies:
bash
Copy code
npm install

Create a .env file in the root directory and set up the necessary environment variables, including database connection details.
PORT=3000
JWT_SECRET=hjvjhhjhj
DATABASE_URL=postgres://username:password@localhost:5432/databasename

### Run the application:
bash
npm start

### API Endpoints
## Authentication
Login
URL: /login
Method: POST
Request Body:
json
Copy code
{
  "email": "admin@codesfortomorrow.com",
  "password": "Admin123!@#"
}
Response:
Success: Returns JWT token
Error: Returns error message

## Categories
Create Category

URL: /category
Method: POST
Request Body:
json
Copy code
{
  "name": "Category Name"
}
Response:
Success: Returns created category
Error: Returns error message
## Get All Categories

URL: /categories
Method: GET
Response: Returns a list of all categories
Update Category

URL: /category/:categoryId
Method: PUT
Request Body:
json
Copy code
{
  "name": "Updated Category Name"
}
Response:
Success: Returns updated category
Error: Returns error message

## Delete Category
URL: /category/:categoryId
Method: DELETE
Response:
Success: Returns 204 No Content
Error: Returns error message
Services
Create Service

URL: /category/:categoryId/service
Method: POST
Request Body:
json
Copy code
{
  "name": "Service Name",
  "type": "Normal",
  "priceOptions": [
    {
      "duration": "1 Hour",
      "price": 50,
      "type": "Hourly"
    }
  ]
}
Response:
Success: Returns created service
Error: Returns error message

### Get All Services in Category
URL: /category/:categoryId/services
Method: GET
Response: Returns a list of all services in the specified category
Update Service

URL: /category/:categoryId/service/:serviceId
Method: PUT
Request Body:
json
Copy code
{
  "name": "Updated Service Name",
  "type": "VIP",
  "priceOptions": [
    {
      "duration": "1 Hour",
      "price": 60,
      "type": "Hourly"
    }
  ]
}
Response:
Success: Returns updated service
Error: Returns error message

### Delete Service
URL: /category/:categoryId/service/:serviceId
Method: DELETE
Response:
Success: Returns 204 No Content
Error: Returns error message

## Schemas
#### Category Schema
Name: string (required)
Service Schema
Category ID: number (required)
Service Name: string (required)
Type: string (possible options: Normal, VIP)
Price Options: (array of objects)
Duration: string
Price: number
Type: string (possible options: Hourly, Weekly, Monthly)

#### Running the Application
Ensure you have PostgreSQL installed and running. Create a database and update the connection details in the .env file. Then, run the application using npm start.

## Postman Documentation 
  [link]https://documenter.getpostman.com/view/26402935/2sA3kaAy9h
You can find the API documentation in Postman using the provided collection. Import the collection into Postman to test all endpoints easily.

Note
Use the credentials provided for login.
All API requests except login require a valid JWT token in the Authorization header.



