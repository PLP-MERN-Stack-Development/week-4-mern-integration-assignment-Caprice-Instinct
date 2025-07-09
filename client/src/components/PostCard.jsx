import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, onDelete, showActions = false }) => {
  return (
    <div className="post-card">
      <h3>
        <Link to={`/posts/${post._id}`}>{post.title}</Link>
      </h3>
      <div className="post-meta">
        By {post.author?.name} | {new Date(post.createdAt).toLocaleDateString()} | 
        Category: {post.category?.name} | Views: {post.viewCount}
      </div>
      <p>{post.excerpt || post.content.substring(0, 150)}...</p>
      {showActions && (
        <div style={{ marginTop: '10px' }}>
          <Link to={`/edit/${post._id}`} className="btn btn-primary" style={{ marginRight: '10px' }}>
            Edit
          </Link>
          <button 
            onClick={() => onDelete(post._id)} 
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PostCard;