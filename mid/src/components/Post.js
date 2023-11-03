import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import { posts } from '../data';

const Post = (props) => {
  // const history = useHistory();
  let { id } = useParams();
  let post = posts.find(posts => posts.id === parseInt(id));

  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  const [likeStatus, setLikeStatus] = useState('neutral'); // 'neutral', 'liked', 'disliked'


  const handleLike = () => {
    if (likeStatus === 'neutral') {
      setLikes(likes + 1);
      setLikeStatus('liked');
    } else if (likeStatus === 'liked') {
      setLikes(likes - 1);
      setLikeStatus('neutral');
    } else if (likeStatus === 'disliked') {
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
      setLikeStatus('liked');
    }
  };

  const handleDislike = () => {
    if (likeStatus === 'neutral') {
      setDislikes(dislikes + 1);
      setLikeStatus('disliked');
    } else if (likeStatus === 'liked') {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setLikeStatus('disliked');
    } else if (likeStatus === 'disliked') {
      setDislikes(dislikes - 1);
      setLikeStatus('neutral');
    }
  };

  const handleDelete = () => {
    const postIndex = posts.findIndex(post => post.id === parseInt(id));
    if (postIndex !== -1) {
      posts.splice(postIndex, 1);

      // history.push('/');
    }
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>Post</h1>
      <p>Id: {post.id}</p>
      <p>Author: {post.author}</p>
      <p>Text: {post.text}</p>
      <p>Likes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Post;
