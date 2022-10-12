import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import PostComponent from '../Post/PostComponent';
//스택 네비게이션 추가 예정
function HomeTab() {
  return (
    <ScrollView>
      <PostComponent />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeTab;
