const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const User = require('./models/User');
const Post = require('./models/Post');

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Category.deleteMany({});
    await User.deleteMany({});
    await Post.deleteMany({});

    // Create categories
    const categories = await Category.create([
      { name: 'Technology', description: 'Tech-related posts' },
      { name: 'Lifestyle', description: 'Lifestyle and personal posts' },
      { name: 'Travel', description: 'Travel experiences and tips' }
    ]);

    // Create a sample user
    const user = await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    });

    // Create sample posts
    await Post.create([
      {
        title: 'Getting Started with MERN Stack',
        content: 'The MERN stack is a powerful combination of technologies for building modern web applications. It consists of MongoDB, Express.js, React.js, and Node.js.',
        excerpt: 'Learn the basics of MERN stack development',
        author: user._id,
        category: categories[0]._id,
        tags: ['MERN', 'JavaScript', 'Web Development'],
        isPublished: true
      },
      {
        title: 'Best Practices for React Development',
        content: 'React is a powerful library for building user interfaces. Here are some best practices to follow when developing React applications.',
        excerpt: 'Essential React development tips',
        author: user._id,
        category: categories[0]._id,
        tags: ['React', 'JavaScript', 'Frontend'],
        isPublished: true
      }
    ]);

    console.log('Sample data created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();