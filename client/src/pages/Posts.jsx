import React, { useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useAuth } from '../context/AuthContext';
import PostCard from '../components/PostCard';

const Posts = () => {
  const [page, setPage] = useState(1);
  const { posts, loading, error, pagination, deletePost } = usePosts(page);
  const { user } = useAuth();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
      } catch (error) {
        alert('Failed to delete post');
      }
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <h1>All Posts</h1>
      
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <>
          {posts.map(post => (
            <PostCard 
              key={post._id} 
              post={post} 
              onDelete={handleDelete}
              showActions={user && post.author._id === user.id}
            />
          ))}
          
          {pagination.pages > 1 && (
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(pageNum => (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`btn ${pageNum === page ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ margin: '0 5px' }}
                >
                  {pageNum}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Posts;