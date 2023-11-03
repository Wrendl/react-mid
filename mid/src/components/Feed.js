import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data';

const Feed = () => {
  const [newPost, setNewPost] = useState('');
  const [postList, setPostList] = useState(posts);

  const handleAddPost = () => {
    if (newPost) {
      const newId = postList.length + 1;
      const newPostObj = { id: newId, text: newPost, author: "user1" };
      setPostList([...postList, newPostObj]);
      setNewPost('');
    }
  };

  return (
    <div>
      <h1>Feed</h1>
      <div>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handleAddPost}>Post</button>
      </div>
      {postList.map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>{post.text}</Link>
          <p>Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
