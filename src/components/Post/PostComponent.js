import React from 'react';
import {FlatList, View} from 'react-native';
import {usePostContext} from '../../contexts/PostContext';
import CardComponent from './CardComponent';

const PostComponent = () => {
  const {posts} = usePostContext();

  return (
    <View style={{flex: 1, width: '100%'}}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={posts.postId}
      />
    </View>
  );
};
const renderItem = ({item, index}) => (
  <CardComponent data={item} index={index} />
);

export default PostComponent;
