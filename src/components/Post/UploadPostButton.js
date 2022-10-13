import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
function UploadPostButton() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('UploadScreen');
        }}>
        <AntDesign name="plussquareo" size={24} style={{marginRight: 10}} />
      </TouchableOpacity>
      <UploadPostButton
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}

export default UploadPostButton;
