import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addXeMay} from '../Reducers/xeMayReducer';
import XeMayForm from '../Components/XeMayForm';

const AddXeMayScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleAddXeMay = xeMay => {
    dispatch(addXeMay(xeMay))
      .then(() => {
        Alert.alert('Thông báo', 'Thêm thành công!', [
          {text: 'OK', onPress: () => navigation.goBack()},
        ]);
      })
      .catch(error => {
        Alert.alert('Lỗi', 'Có lỗi xảy ra, vui lòng thử lại.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thêm</Text>
      <XeMayForm onSubmit={handleAddXeMay} />
    </View>
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
  cancelButton: {
    padding: 15,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddXeMayScreen;
