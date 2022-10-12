import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
function PostTitleComponent({data}) {
  return (
    <View style={styles.postTitleWrapper}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={data.postPersonImage}
          style={{width: 40, height: 40, borderRadius: 100}}
        />
        <View style={{paddingLeft: 5}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            {data.postTitle}
          </Text>
        </View>
      </View>
      <Feather name="more-vertical" style={{fontSize: 20}} />
    </View>
  );
}
const styles = StyleSheet.create({
  postTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
});
export default PostTitleComponent;
