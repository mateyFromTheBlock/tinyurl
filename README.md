## Features

- Shorten long URLs
- Track visit counts

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/username/repo.git
    cd repo
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory with the following content:
        ```dotenv
        PORT=3000
        MONGO_URI=mongodb://localhost:27017
        MONGO_USER=admin
        MONGO_PASS=admin
        MONGO_DB_NAME=tinyurl
        BASE_URL=http://localhost:3000
        ```

## Running the Application

1. Start the MongoDB server.

2. Run the application:
    ```sh
    npm start
    ```

3. The application will be available at `http://localhost:3000`.

## Running the Application with Docker
- Run the application using Docker Compose:
    ```sh
    docker-compose up --build
    ```

## Routes

### Create Short URL

- **URL**: `/shorten`
- **Method**: `POST`
- **Description**: Creates a shortened URL for the given long URL.
- **Request Body**:
    ```json
    {
        "longUrl": "https://example.com"
    }
    ```
- **Response**:
    ```json
    {
        "longUrl": "https://example.com",
        "shortUrl": "http://localhost:3000/abc1234"
    }
    ```

### Redirect to Long URL

- **URL**: `/:shortUrl`
- **Method**: `GET`
- **Description**: Redirects to the original long URL corresponding to the given short URL.
- **Response**: Redirects to the long URL.

### Get URL Visit Count

- **URL**: `/:shortUrl/visits`
- **Method**: `GET`
- **Description**: Retrieves the visit count for the given short URL.
- **Response**:
    ```json
    {
        "visitCount": 42
    }
    ```

## Development

- To start the application in development mode with hot-reloading:
    ```sh
    npm run dev
    ```
