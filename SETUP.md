# MERN Blog Setup Instructions

## Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

### 1. Install Server Dependencies
```bash
cd server
pnpm install
```

### 2. Install Client Dependencies
```bash
cd client
pnpm install
```

### 3. Environment Setup

#### Server Environment (.env in server folder)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-blog
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=30d
```

#### Client Environment (.env in client folder)
```
VITE_API_URL=http://localhost:5000/api
```

### 4. Database Setup

Start MongoDB service, then seed the database:
```bash
cd server
pnpm seed
```

## Running the Application

### 1. Start the Server
```bash
cd server
pnpm dev
```
Server will run on http://localhost:5000

### 2. Start the Client
```bash
cd client
pnpm dev
```
Client will run on http://localhost:5173

## Features Implemented

### Core Features
- ✅ RESTful API with Express.js and MongoDB
- ✅ React front-end with component architecture
- ✅ Full CRUD functionality for blog posts
- ✅ User authentication and authorization
- ✅ Category management
- ✅ Responsive UI design

### API Endpoints
- `GET /api/posts` - Get all posts (with pagination)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (protected)
- `PUT /api/posts/:id` - Update post (protected)
- `DELETE /api/posts/:id` - Delete post (protected)
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (protected)
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Advanced Features
- ✅ Search and filtering
- ✅ Pagination
- ✅ View counter
- ✅ Comments system (backend ready)
- ✅ Protected routes
- ✅ Optimistic UI updates

## Usage

1. Run `pnpm install` in both server and client directories
2. Register a new account or login with existing credentials
2. Browse posts on the home page or posts page
3. Create new posts when logged in
4. Edit/delete your own posts
5. View detailed post pages with comments

## Default Login
- Email: john@example.com
- Password: password123

## Project Structure
```
mern-blog/
├── client/                 # React front-end
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context
│   │   └── App.jsx         # Main app component
│   └── package.json
├── server/                 # Express.js back-end
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── server.js           # Main server file
└── README.md
```