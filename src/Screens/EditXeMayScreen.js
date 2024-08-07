import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateXeMay} from '../Reducers/xeMayReducer';
import XeMayForm from '../Components/XeMayForm';

const EditXeMayScreen = ({route, navigation}) => {
  const {xeMay} = route.params;
  const dispatch = useDispatch();

  const handleUpdateXeMay = updatedXeMay => {
    dispatch(updateXeMay({...xeMay, ...updatedXeMay}))
      .then(() => {
        Alert.alert('Thông báo', 'Cập nhật thành công!', [
          {text: 'OK', onPress: () => navigation.goBack()},
        ]);
      })
      .catch(error => {
        Alert.alert('Lỗi', 'Có lỗi xảy ra, vui lòng thử lại.');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sửa</Text>
      <XeMayForm initialValues={xeMay} onSubmit={handleUpdateXeMay} />
      <View style={styles.buttonContainer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    padding: 15,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EditXeMayScreen;
