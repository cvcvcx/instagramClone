import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import PostComponent from '../Post/PostComponent';
//스택 네비게이션 추가 예정
function HomeTab() {
  return (
    <View style={{flex: 1}}>
      <PostComponent />
    </View>
  );
}

export default HomeTab;
