import React from 'react';
import Likes from "./Likes/Likes";
import { Button } from 'antd';
import EditPostForm from "./EditPostForm";

const PostItem = ({post, changePost, removePost}) => {
  const setDislike = () => {
    post.likes--;
    changePost(post);
  }

  const setLike = () => {
    post.likes++;
    changePost(post);
  }

  const remove = () => {
    removePost(post);
  }

  return (
    <div className='post__item'>
      <div className="post__item_content">
        <div>
          <h4>{post.title}</h4>
          <div>{post.body}</div>
        </div>
        <Likes count={post.likes} setDislike={setDislike} setLike={setLike}/>
      </div>
      <div className="post__item_actions">
        <EditPostForm post={post} editPost={changePost}/>
        <Button onClick={remove} danger>remove</Button>
      </div>
    </div>
  )
};


export default PostItem;