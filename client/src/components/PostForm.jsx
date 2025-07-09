import React, { useState, useEffect } from 'react';
import { categoryService } from '../services/api';

const PostForm = ({ post, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: '',
    isPublished: false
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        content: post.content || '',
        excerpt: post.excerpt || '',
        category: post.category?._id || '',
        tags: post.tags?.join(', ') || '',
        isPublished: post.isPublished || false
      });
    }
  }, [post]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.getAllCategories();
        setCategories(response.data || []);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    onSubmit(submitData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows="10"
        />
      </div>

      <div className="form-group">
        <label>Excerpt</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          {categories && categories.map(category => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Tags (comma separated)</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="react, javascript, web development"
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
          />
          Published
        </label>
      </div>

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Saving...' : (post ? 'Update Post' : 'Create Post')}
      </button>
    </form>
  );
};

export default PostForm;