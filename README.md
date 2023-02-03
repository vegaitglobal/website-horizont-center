# Caregivers

This project is divided into [backend/](/backend) and [frontend/](/frontend) directories.
The backend directory contains Django application, and the frontend directory contains
Next.js application.

Table of Contents
=================

* [Requirements](#requirements)
* [Development setup](#development-setup)
    * [Fixtures](#fixtures--optional-)
    * [Superuser](#superuser--optional-)
    * [pgAdmin](#pgadmin--optional-)
* [Production setup](#production-setup)

## Requirements

- **Docker**:
    - Windows - [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
    - Mac - [Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
    - Linux - [Docker Engine](https://docs.docker.com/engine/install/#server)
      and [Docker Compose](https://docs.docker.com/compose/install/)

## Development setup

Development is using
[Django's development server](https://docs.djangoproject.com/en/4.1/intro/tutorial01/#the-development-server).
It is lightwait, and it shouldn't be used in production.

Run:

    docker compose up

(for older versions of Docker Compose use `docker-compose up`)

Open http://localhost:3000 and http://localhost:8000/ with your browser to see the result.

### Fixtures (optional)

Run the command below to load (all) test data (fixtures):

    docker exec -it caregivers-django sh -c 'python /app/src/manage.py load_data'

**NOTE**: this will add a superuser as well with these credentials:

- email: admin@example.com
- password: admin

### Superuser (optional)

In order to log in to Django Admin (http://localhost:8000/), you will need a staff user.
When running `docker compose up` command for the first time, a superuser is automatically
created with these credentials:

- email: admin@example.com
- password: admin

Use the above credentials to log in to Django Admin.

If you want to create another superuser, run this command:

- `docker exec -it caregivers-django sh -c 'python /app/src/manage.py create_superuser'`

### pgAdmin (optional)

[pgAdmin](https://www.pgadmin.org/) is an administration and development platform for PostgreSQL
database. After running `docker compose up` command, pgAdmin should be available at http://0.0.0.0:8080/
To log in, use these credentials:

- email: admin@example.com
- password: admin

Once you successfully log in, follow these steps to connect to the database:

1. Click on the "Add New Servers" button that should be under "Quick Links". This should open
   "Register - Server" popup window.
2. Enter any name in the "Name" field (under the first tab called "General").
3. Go to the second tab called "Connection" and enter values for these fields:
    - host name/address: `postgres`
    - port: should be prefilled with `5432` which is the correct port
    - username: `caregivers`
    - password: `caregivers`
4. Click on the "Save" button and a connection with the database should be created and visible
   under the "Servers" menu item located in the left vertical navigation of the pgAdmin page.

## Production setup

The only difference between development and production is in the web server.
Production is using [Gunicorn](https://gunicorn.org/) web server which is
optimized for production environments.

To start the project in production environment, run:

    docker compose -f docker-compose.production.yml up
