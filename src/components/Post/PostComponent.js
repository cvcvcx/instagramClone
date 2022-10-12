import React from 'react';
import {View} from 'react-native';

import {usePostContext} from '../../contexts/PostContext';
import CardComponent from './CardComponent';

const PostComponent = () => {
  const {posts} = usePostContext();

  return (
    <View style={{flex: 1}}>
      {posts.map((data, index) => (
        <>
          <CardComponent data={data} index={index} />
        </>
      ))}
    </View>
  );
};

export default PostComponent;
