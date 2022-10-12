import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
function PostFooterButtonComponent({data, like, setLike}) {
  return (
    <View style={styles.postFooterButton}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            console.log(data);
            setLike(data.postId);
          }}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{
              paddingRight: 10,
              fontSize: 20,
              color: like ? 'red' : 'black',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionic
            name="ios-chatbubble-outline"
            style={{fontSize: 20, paddingRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="navigation" style={{fontSize: 20}} />
        </TouchableOpacity>
      </View>
      <Feather name="bookmark" style={{fontSize: 20}} />
    </View>
  );
}
const styles = StyleSheet.create({
  postFooterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
});
export default PostFooterButtonComponent;
