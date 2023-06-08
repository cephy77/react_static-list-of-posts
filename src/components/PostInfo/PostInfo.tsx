import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <p>
            {' Posted by  '}

            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">{body}</p>

      {
        comments?.length
          ? <CommentList comments={comments} />
          : (
            <div
              className="PostInfo__no-comments"
              data-cy="NoCommentsMessage"
            >
              No comments yet
            </div>
          )
      }
    </div>
  );
};