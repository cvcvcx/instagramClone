import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

function SearchTab() {
  return (
    <View style={styles.container}>
      <Text>SearchTab</Text>
    </View>
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
export default SearchTab;
