# Business Supply
Business supply express!

## Quick Start
Install Docker, then run this command to start the app:
```bash
docker compose up -d
```

The app will be available at http://localhost:3000. This is an optimized
production build which does not support debugging features.

## Developing
Development mode supports hot reloading and other niceties. To get started:

1. Ensure you have Node.js ≥ v18 installed.
2. Set up a MySQL database using either of the two options described below.
3. Run the following command to install dependencies:
```bash
npm install
```
4. Run the following command to start the app in development mode:
```bash
npm run dev
```

The app will be available at http://localhost:3000.

### MySQL in Docker
1. Run the following command to start the database:
```bash
docker compose up -d mysql
```

2. Run the following command to create the configuration file:
```bash
cp .env.example .env
```

### MySQL elsewhere
1. Create and populate a new database called `business_supply` by running the
SQL script `db/1-schema.sql`.
2. Create the stored procedures and views by running the SQL script
`db/2-stored-procedures.sql`.
3. Create a `.env` file in the project root directory with the database
configuration. You can use the `.env.example` file as a template.

## Technologies
This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with
`create-t3-app`.

Using tRPC allows the previously written stored procedures and views to be
simply wrapped in tRPC routers and called directly from the frontend. tRPC
takes care of the transport in between, and we get type safety and
autocompletion everywhere with little effort. This makes development much
easier.

On the frontend, we used the Mantine component library to get nice-looking
components with minimal effort. It also gives us dark mode, which is nice.

## Work Distribution
Darin - Helped to set up repository and get the project started. Researched and 
decided on tech stack and helped others understand how to start using the stack
for development. 

Jefferey - Helped with getting started on the UI and working with Mantine. Helped
with documentation and getting the database connected seamlessly using mysql2,
a mysql client for Node.js. 

Steve - Helped with documentation and getting the procedures to integrate
seamlessly with the server. Helped set up Docker as well.

David - Helped with documentation and finishing up the procedures. Helped with
UI and debugging / checking requirements. 
