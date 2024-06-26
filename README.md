﻿# L2B2-Frontend-Path-Assignment-8-Server

## Installation:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run dev`.


## Configuration:
- Environment Variables:
  - `PORT`: Port number the server listens on. Default: 3000
  - `MONGODB_URI`: URI for MongoDB database.
## Usage:
- API Endpoints:
  - GET `/supplies`
    - Description: Authenticates user and returns a JWT token.
    
  - POST `/supplies`
## Dependencies:
- `bcrypt`: Library for hashing passwords.
- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from .env file.
- `express`: Web framework for Node.js.
- `mongodb`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.

