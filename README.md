# MERN Stack Blog Application

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19913457&assignment_repo_type=AssignmentRepo)

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application with authentication, CRUD operations, and advanced features.

## 🚀 Features Implemented

### Core Features
- ✅ **RESTful API** with Express.js and MongoDB
- ✅ **React front-end** with component architecture
- ✅ **Full CRUD functionality** for blog posts
- ✅ **User authentication** and authorization
- ✅ **Category management** system
- ✅ **Responsive UI** design

### Advanced Features
- ✅ **Search and filtering** functionality
- ✅ **Pagination** for post lists
- ✅ **View counter** for posts
- ✅ **Comments system** (backend ready)
- ✅ **Protected routes** and authorization
- ✅ **Optimistic UI updates**

## 📁 Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   ├── .env.example        # Environment variables template
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Main server file
│   ├── .env.example        # Environment variables template
│   └── package.json        # Server dependencies
├── pnpm-workspace.yaml     # PNPM workspace configuration
├── package.json            # Root workspace package
└── README.md               # Project documentation
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd week-4-mern-integration-assignment-Caprice-Instinct
   ```

2. **Install all dependencies**
   ```bash
   pnpm install
   ```
   Or individually:
   ```bash
   # Server dependencies
   cd server
   pnpm install
   
   # Client dependencies
   cd ../client
   pnpm install
   ```

3. **Environment Setup**
   
   Copy `.env.example` files and configure:
   ```bash
   # Server environment
   cp server/.env.example server/.env
   
   # Client environment
   cp client/.env.example client/.env
   ```
   
   Update `server/.env` with your MongoDB connection string:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-blog
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=30d
   ```

4. **Database Setup**
   
   Start MongoDB service, then seed the database:
   ```bash
   pnpm seed
   ```

5. **Start Development Servers**
   ```bash
   # Start both client and server
   pnpm dev
   ```
   
   Or start individually:
   ```bash
   # Server (http://localhost:5000)
   cd server && pnpm dev
   
   # Client (http://localhost:5173)
   cd client && pnpm dev
   ```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Posts Endpoints
- `GET /api/posts` - Get all posts (with pagination, search, filtering)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (protected)
- `PUT /api/posts/:id` - Update post (protected)
- `DELETE /api/posts/:id` - Delete post (protected)

### Categories Endpoints
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (protected)

### Query Parameters
- `page` - Page number for pagination
- `limit` - Items per page
- `category` - Filter by category ID
- `search` - Search in title and content

## 🎯 Usage

1. **Register/Login**: Create an account or use default credentials
   - Email: `john@example.com`
   - Password: `password123`

2. **Browse Posts**: View all posts on the home page or posts page

3. **Create Posts**: Write new blog posts when logged in

4. **Manage Posts**: Edit or delete your own posts

5. **Categories**: Organize posts by categories

6. **Search**: Find posts using the search functionality

## 🖼️ Screenshots

### Home Page
The landing page displays featured posts and navigation.

### Posts List
Browse all posts with pagination and filtering options.

### Create Post
Authenticated users can create new blog posts with categories and tags.

### Post Detail
View individual posts with comments and author information.

## 🧪 Testing

The application includes:
- Input validation using Joi
- Error handling middleware
- Protected routes
- Authentication middleware
- CORS configuration

## 🚀 Deployment

For production deployment:

1. Build the client:
   ```bash
   cd client && pnpm build
   ```

2. Set production environment variables

3. Deploy to your preferred platform (Heroku, Vercel, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)