import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CardComponent from '../CardComponent';

function HomeTab() {
  return (
    <ScrollView>
      <CardComponent />
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
