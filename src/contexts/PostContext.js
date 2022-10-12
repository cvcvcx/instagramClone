import React from 'react';
import {createContext, useState} from 'react';
import {useContext} from 'react';
const PostContext = createContext(null);
const postInfo = [
  {
    postId: 1,
    postTitle: 'mr shermon',
    postPersonImage: require('../storage/images/userProfile.png'),
    postImage: require('../storage/images/post1.jpg'),
    likes: 765,
    isLiked: true,
  },
  {
    postId: 2,
    postTitle: 'chillhouse',
    postPersonImage: require('../storage/images/profile5.jpg'),
    postImage: require('../storage/images/post2.jpg'),
    likes: 345,
    isLiked: false,
  },
  {
    postId: 3,
    postTitle: 'Tom',
    postPersonImage: require('../storage/images/profile4.jpg'),
    postImage: require('../storage/images/post3.jpg'),
    likes: 734,
    isLiked: false,
  },
  {
    postId: 4,
    postTitle: 'The_Groot',
    postPersonImage: require('../storage/images/profile3.jpg'),
    postImage: require('../storage/images/post4.jpg'),
    likes: 875,
    isLiked: false,
  },
];

export function PostContextProvider({children}) {
  const [posts, setPosts] = useState(postInfo);
  const onLikePostToggle = postId => {
    setPosts(
      posts.map(post =>
        post.postId === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };
  const createPost = newPost => setPosts(posts.concat(newPost));
  return (
    <PostContext.Provider value={{posts, createPost, onLikePostToggle}}>
      {children}
    </PostContext.Provider>
  );
}
export function usePostContext() {
  const postContext = useContext(PostContext);
  if (!postContext) {
    throw new Error('PostContext.Provider is not found');
  }
  return postContext;
}
