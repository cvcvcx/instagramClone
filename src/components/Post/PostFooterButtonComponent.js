import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
function PostFooterButtonComponent({data, like, setLike}) {
  //유즈 콜백을 통해 useEffect의 의존성을 logData가 변화할 때로 바꿈
  const logData = useCallback(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    logData();
  }, [logData]);
  return (
    <View style={styles.postFooterButton}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
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
