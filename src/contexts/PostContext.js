import React from 'react';
import {createContext, useState} from 'react';

const PostContext = createContext();
const postInfo = [
  {
    postTitle: 'mr shermon',
    postPersonImage: require('../storage/images/userProfile.png'),
    postImage: require('../storage/images/post1.jpg'),
    likes: 765,
    isLiked: true,
  },
  {
    postTitle: 'chillhouse',
    postPersonImage: require('../storage/images/profile5.jpg'),
    postImage: require('../storage/images/post2.jpg'),
    likes: 345,
    isLiked: false,
  },
  {
    postTitle: 'Tom',
    postPersonImage: require('../storage/images/profile4.jpg'),
    postImage: require('../storage/images/post3.jpg'),
    likes: 734,
    isLiked: false,
  },
  {
    postTitle: 'The_Groot',
    postPersonImage: require('../storage/images/profile3.jpg'),
    postImage: require('../storage/images/post4.jpg'),
    likes: 875,
    isLiked: false,
  },
];

export function PostContextProvider({children}) {
  const [posts, setPosts] = useState(postInfo);
  const createPost = newPost => setPosts(posts.concat(newPost));
  return (
    <PostContext.Provider value={{posts, createPost}}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContext;
