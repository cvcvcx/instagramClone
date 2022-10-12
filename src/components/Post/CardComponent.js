import {View, Text, Image, TextInput, StyleSheet} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import React, {useState} from 'react';
import PostTitleComponent from './PostTitleComponent';
import PostFooterButtonComponent from './PostFooterButtonComponent';

function CardComponent({data, index}) {
  const [like, setLike] = useState(data.isLiked);
  return (
    <View key={index} style={styles.wrapper}>
      <PostTitleComponent data={data} />
      <View style={styles.postImageWrapper}>
        <Image source={data.postImage} style={{width: '100%', height: 400}} />
      </View>
      <PostFooterButtonComponent data={data} like={like} setLike={setLike} />
      <View style={{paddingHorizontal: 15}}>
        <Text>
          Liked by {like ? 'you and' : ''} {like ? data.likes + 1 : data.likes}{' '}
          others
        </Text>
        <Text style={styles.descriptionBody}>
          If enjoy the video ! Please like and Subscribe :)
        </Text>
        <Text style={{opacity: 0.4, paddingVertical: 2}}>
          View all comments
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={data.postPersonImage}
              style={styles.commentPersonImage}
            />
            <TextInput placeholder="Add a comment " style={{opacity: 0.5}} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.1,
    backgroundColor: 'white',
  },

  postImageWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionBody: {
    fontWeight: '700',
    fontSize: 14,
    paddingVertical: 2,
  },
  commentPersonImage: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: 'orange',
    marginRight: 10,
  },
});
export default CardComponent;
