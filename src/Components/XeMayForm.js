import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const XeMayForm = ({onSubmit, initialValues = {}}) => {
  const [tenXe, setTenXe] = useState(initialValues.ten_xe_PH45671 || '');
  const [mauSac, setMauSac] = useState(initialValues.mau_sac_PH45671 || '');
  const [giaBan, setGiaBan] = useState(initialValues.gia_ban_PH45671 || '');
  const [moTa, setMoTa] = useState(initialValues.mo_ta_PH45671 || '');
  const [hinhAnh, setHinhAnh] = useState(initialValues.hinh_anh_PH45671 || '');

  const handleSubmit = () => {
    if (!tenXe || !mauSac || !giaBan || !moTa || !hinhAnh) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }

    onSubmit({
      ten_xe_PH45671: tenXe,
      mau_sac_PH45671: mauSac,
      gia_ban_PH45671: giaBan,
      mo_ta_PH45671: moTa,
      hinh_anh_PH45671: hinhAnh,
    });
  };

  const selectImage = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        setHinhAnh(response.assets[0].uri);
      }
    });
  };

  const takePhoto = () => {
    launchCamera({}, response => {
      if (response.assets && response.assets.length > 0) {
        setHinhAnh(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tên xe"
        value={tenXe}
        onChangeText={setTenXe}
      />
      <TextInput
        style={styles.input}
        placeholder="Màu sắc"
        value={mauSac}
        onChangeText={setMauSac}
      />
      <TextInput
        style={styles.input}
        placeholder="Giá"
        value={giaBan}
        onChangeText={setGiaBan}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Mô tả"
        value={moTa}
        onChangeText={setMoTa}
      />
      {hinhAnh ? <Image source={{uri: hinhAnh}} style={styles.image} /> : null}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.selectImageButton]}
          onPress={selectImage}>
          <Text style={styles.buttonText}>Chọn ảnh</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.takePhotoButton]}
          onPress={takePhoto}>
          <Text style={styles.buttonText}>Chụp ảnh</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.submitButton]}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginHorizontal: 130,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 80,
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  selectImageButton: {
    width: 80,

    backgroundColor: '#4CAF50',
  },
  takePhotoButton: {
    width: 80,

    backgroundColor: '#FFC107',
  },
  submitButton: {
    width: '100%',

    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default XeMayForm;
