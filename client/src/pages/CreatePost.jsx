import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/PostForm';

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { createPost } = usePosts();
  const navigate = useNavigate();

  const handleSubmit = async (postData) => {
    try {
      setLoading(true);
      setError(null);
      await createPost(postData);
      navigate('/posts');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Create New Post</h1>
      {error && <div className="error">{error}</div>}
      <PostForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default CreatePost;