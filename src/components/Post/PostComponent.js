import React, {useContext} from 'react';
import {View} from 'react-native';

import PostContext from '../../contexts/PostContext';
import CardComponent from './CardComponent';

const PostComponent = () => {
  const {posts} = useContext(PostContext);

  return (
    <View style={{flex: 1}}>
      {posts.map((data, index) => (
        <CardComponent data={data} index={index} />
      ))}
    </View>
  );
};

export default PostComponent;
