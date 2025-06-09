# Netflix Clone

A full-stack Netflix clone web application with user authentication, video streaming, search, and watch history features.
Live at https://netflix-clone-ap3l.onrender.com

## Technologies Used

- Backend: Node.js, Express, MongoDB, JWT, Cookie-parser
- Frontend: React, React Router, Zustand, Tailwind CSS, Vite

## Project Structure

- `Backend/`: Backend API server
- `Frontend/`: Frontend React application

## Installation

### Backend

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies (if package.json existed, otherwise ensure dependencies are installed):
   ```bash
   npm install
   ```
3. Create a `.env` file for environment variables (e.g., PORT, DB connection).
4. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend

1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Features

- User registration and login
- Browse and watch movies and TV shows
- Search content
- Watch history tracking
- Responsive UI with routing and protected routes

## Folder Structure

```
Netflix_Clone/
├── Backend/            # Backend API server
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Middleware like protectRoute
│   ├── models/         # Database models
│   ├── routes/         # API route definitions
│   ├── services/       # External API services
│   ├── utils/          # Utility functions
│   ├── config/         # Configuration files
│   └── server.js       # Main server file
├── Frontend/           # React frontend application
│   ├── public/         # Static assets
│   ├── src/            # React source code
│   ├── package.json    # Frontend dependencies and scripts
│   └── vite.config.js  # Vite configuration
└── README.md           # This file
```

## Contact

For any questions or feedback, please contact.
