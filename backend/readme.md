# Holo Backend Coding Challenge


## Task:  Voucher Pool
The objective is to create a voucher pool in NestJs. You can use whichever libraries you prefer. The service should expose a ​REST API​.

A voucher pool is a collection of voucher codes that can be used by customers to get discounts on website. Each code may only be used once, and we would like to know when it was used by the customer. Since there can be many customers in a voucher pool, we need a call that auto-generates voucher codes for each customer. Here’s a screenshot to give you an idea what it looks like:

![Voucher Pool](Voucher-Pool.png)

### Entities
* Customer
    *	Name
    *	Email (unique)
*	Special Offer
     *	Name
     *	Fixed percentage discount
*	Voucher Code
     *	Unique randomly generated Code (at least 8 chars)
     *	Assigned to a Customer and a special offer
     *	Expiration Date
     *	Can just be used once
     *	Should track date of usage

### Functionalities
* Generate Voucher Code for each customer for a given Special Offer and expiration data
* Provide an endpoint, reachable via HTTP, which receives a Voucher Code and Email and
  validates the Voucher Code. In Case it is valid, return the Percentage Discount and set the
  date of usage
* For a given Email return all its valid Voucher Codes with the Name of the Special Offer

### Tasks
* [ ] Design a database schema
* [ ] Write an application
* [ ] API endpoint for verifying and redeeming vouchers
* [ ] Implement API Rate Limiting: Protect the API from abuse by implementing rate limiting on the endpoints.
* [ ] Use Database Transactions: Ensure data consistency by implementing use of transactions in your application.
* [ ] Write unit tests
* [ ] Using Typescript
* [ ] A nice little Readme on how to run
* [ ] ***PLUS POINT:*** Writing swagger for the API
* [ ] ***PLUS POINT:*** Docker file to setup the whole application with all the dependencies (database, nodejs)


>  Focus on code quality
> No need for access control think of it as an internal application

# Running the Project with Docker

## Prerequisites
- Ensure you have [Docker](https://www.docker.com/get-started) installed.
- Ensure you have [Docker Compose](https://docs.docker.com/compose/install/) installed.

## Steps to Run
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Start the application using Docker Compose:
   ```sh
   docker-compose up --build
   ```

3. The API should now be available at:
   ```
   http://localhost:3000
   ```

## Stopping the Containers
To stop the running services:
```sh
docker-compose down
```

## Environment Variables
The `.env` file is not required, as all variables are injected via Docker.

