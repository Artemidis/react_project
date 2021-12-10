import React from 'react';
import PropTypes from 'prop-types';
import cl from './Likes.module.scss';
import Button from "../ui/button/Button";

const Likes = ({count, setDislike, setLike}) => {
  return (
    <div className={cl.Likes}>
      <Button className={'decr'} onClick={setDislike}>-</Button>
      <div className={cl.Count}>{count}</div>
      <Button onClick={setLike}>+</Button>
    </div>
  );
};

Likes.propTypes = {
  count: PropTypes.number
};

export default Likes;