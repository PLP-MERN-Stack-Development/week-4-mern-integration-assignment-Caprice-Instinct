import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postService } from '../services/api';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/PostForm';

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { updatePost } = usePosts();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postService.getPost(id);
        setPost(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch post');
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (postData) => {
    try {
      setLoading(true);
      setError(null);
      await updatePost(id, postData);
      navigate(`/posts/${id}`);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update post');
    } finally {
      setLoading(false);
    }
  };

  if (!post) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <h1>Edit Post</h1>
      {error && <div className="error">{error}</div>}
      <PostForm post={post} onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default EditPost;