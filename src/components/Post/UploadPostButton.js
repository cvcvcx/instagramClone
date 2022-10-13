import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UploadModeModal from './UploadModeModal';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
function UploadPostButton() {
  const imagePickerOption = {
    mediaType: 'photo',
    maxWidth: 768,
    maxHeight: 768,
    includeBase64: Platform.OS === 'android',
  };
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const onPickImage = res => {
    if (res.didCancel || !res) {
      return;
    }
    navigation.push('UploadScreen', {res});
  };
  const onLaunchCamera = () => {
    launchCamera(imagePickerOption, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };
  return (
    <>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => {
          setModalVisible(true);
        }}>
        <AntDesign name="plussquareo" size={24} style={{marginRight: 10}} />
      </TouchableOpacity>
      <UploadModeModal
        visible={modalVisible}
        onLaunchCamera={onLaunchCamera}
        onLaunchImageLibrary={onLaunchImageLibrary}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}

export default UploadPostButton;
