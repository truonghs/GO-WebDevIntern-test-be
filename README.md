# My G-Weather-Forecast (Back-End)

Welcome to G-Weather-Forecast. This is an application built using NestJS to handle requests from [G-Weather-Forecast](https://go-web-dev-intern-test.vercel.app/). Please follow the following introduction to get the project up and running!

## Table of Contents

- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Settings](#settings)
- [Run the Project](#run-the-project)
- [Deployment](#deployment)

## System Requirements

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://classic.yarnpkg.com/)
- [git](https://git-scm.com/)

## Installation
1. Clone the repository:

    ```bash
    git clone https://github.com/truonghs/GO-WebDevIntern-test-be.git
    ```

2. Install the Nest CLI globally:

  ```bash
    npm install -g @nestjs/cli
  ```
    

3. Navigate into the project directory:

    ```bash
    cd GO-WebDevIntern-test-be
    ```

4. Install the project dependencies:

    Using npm:

    ```bash
    npm install
    ```

## Settings
Add environment variables.\
At the root of the project, create a .env file and add the following environment variables
```
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_uri
EMAIL_USER=your_email
EMAIL_PASS=your_email_pass
CLIENT_URL=your_client_url
APP_URL=your_server_url:port
WEATHER_API_KEY=your_weatherapi_key
WEATHER_API_URL=http://api.weatherapi.com/v1
```

- Replace your_secret_key with your actual secret key.
- Replace your_mongodb_connection_uri with your actual MongoDB connection URL.
- Replace your_email with your email address.
- Replace your_email_pass with your Google app password from [google](https://myaccount.google.com/u/1/apppasswords).
- Replace your_client_url with your actual client URL.
- Replace your_server_url with your actual server URL.
- Replace your_weatherapi_key with the API key from [WeatherAPI](https://www.weatherapi.com).

## Run the Project

To start the development server and run the project locally, use the following command:

Using npm:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Deployment

The server is deployed with Render: [G-Weather-Forecast-BE](https://go-webdevintern-test-be.onrender.com) 
- Because of using the free service that render provides, the server may be stopped if there are no requests for a period of time. So please be patient if your first request to the server takes some time.
