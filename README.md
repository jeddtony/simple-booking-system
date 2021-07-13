# A booking system

## Project Overview
This project was written using PHP (Laravel) on the backend and React.js on the frontend. 

## Project setup
### Frontend Setup
The React.js code can be found in the `frontend` folder. Create React App was used to Bootstrap the frontend. To start this create a `.env` file and copy the contents of `.env.example` file into it. Fill in the value for `REACT_APP_API_URL` based on the base URL of the backend. 

Run the command `npm install` to install dependencies. 

To start the project, run the command `npm start`

### Backend Setup
The backend written in Laravel follows the regular convention in its setup. 

Run `composer install` to install dependencies. 

This uses passport for authentication. To setup passport run the command `php artisan passport:install`

 ### Running Tests
 To run tests simply run the command `composer test`

 ## System Design
 The following models are built on the backend
 1. State
 2. Location
 3. Vehicle
 4. Trip 
 5. Seat
 6. Booking

 ### State
 This is the list of states in Nigeria. To quickly populate the database a seeder has been written for this.

 ### Location
 This refers to pickup and drop off points for customers. Every location belongs to a state.

 ### Vehicle
 This refers to buses used to convey customers from the pickup point to the drop off point. 

 ### Trip 
 This refers to the journey from the pickup location to the destination (drop off) location. 

### Seat
This refers to sitting spot for a customer in the vehicle. Every seat must belong to a vehicle. Seats have statuses attached to them to indicate if they are available or not

### Booking
This refers to a payment made by a customer for a trip. 


## Constraints
This code was developed with small datasets in mind, hence it does not include pagination in its response. When scaling the app, certain database queries made by ORMs should be request by SQL queries to increase speed. 

Payment is being mocked on the frontend by a confirmation modal during booking. Hence, the payment field in the `bookings` table is `true` by default. 

Bookings can only be made for trips created. Since this is for testing purpose, the trips will have to be created manually. However in actual implementation, trips can be scheduled to run regularly. 

For systems like this, reports are supposed to be generated to help make better business decisions. But it was not done in this case.

### Note
There are no edits. Records cannot be edited after being created. 

Only authenticated users can use the system. You need to register to create have an account.
