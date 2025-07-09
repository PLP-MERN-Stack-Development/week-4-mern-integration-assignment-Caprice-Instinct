import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { postService } from '../services/api';
import { useAuth } from '../context/AuthContext';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postService.getPost(id);
        setPost(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="container">
      <article>
        <h1>{post.title}</h1>
        <div className="post-meta">
          By {post.author?.name} | {new Date(post.createdAt).toLocaleDateString()} | 
          Category: {post.category?.name} | Views: {post.viewCount}
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div style={{ margin: '10px 0' }}>
            Tags: {post.tags.map(tag => (
              <span key={tag} style={{ 
                background: '#f0f0f0', 
                padding: '2px 8px', 
                margin: '0 5px', 
                borderRadius: '3px' 
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ margin: '20px 0', whiteSpace: 'pre-wrap' }}>
          {post.content}
        </div>

        {user && post.author._id === user.id && (
          <div style={{ margin: '20px 0' }}>
            <Link to={`/edit/${post._id}`} className="btn btn-primary">
              Edit Post
            </Link>
          </div>
        )}

        {post.comments && post.comments.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <h3>Comments ({post.comments.length})</h3>
            {post.comments.map(comment => (
              <div key={comment._id} style={{ 
                border: '1px solid #ddd', 
                padding: '10px', 
                margin: '10px 0',
                borderRadius: '5px'
              }}>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                  {comment.user?.name} - {new Date(comment.createdAt).toLocaleDateString()}
                </div>
                <div>{comment.content}</div>
              </div>
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default PostDetail;