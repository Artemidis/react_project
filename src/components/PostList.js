import React from 'react';
import PropTypes from 'prop-types';
import PostItem from "./PostItem";

const PostList = ({posts, setLike, setDislike}) => {
  return (
    <div className="post__list">
      {posts.map(post => {
        return <PostItem post={post} setLike={setLike} setDislike={setDislike}/>
      })}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList;