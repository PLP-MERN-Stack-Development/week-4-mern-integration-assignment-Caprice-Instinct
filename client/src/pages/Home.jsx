import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostCard from '../components/PostCard';

const Home = () => {
  const { posts, loading, error } = usePosts(1);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <h1>Welcome to MERN Blog</h1>
      <p>Discover amazing articles and share your thoughts with the community.</p>
      
      <div style={{ margin: '20px 0' }}>
        <Link to="/posts" className="btn btn-primary">View All Posts</Link>
      </div>

      <h2>Latest Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.slice(0, 3).map(post => (
          <PostCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
};

export default Home;