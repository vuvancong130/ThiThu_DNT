import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteXeMay} from '../Reducers/xeMayReducer';

const XeMayItem = ({xeMay, onEdit}) => {
  const dispatch = useDispatch();
  const scaleAnim = new Animated.Value(1);

  const handleDelete = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      dispatch(deleteXeMay(xeMay.id));
    });
  };

  return (
    <Animated.View
      style={[styles.container, {transform: [{scale: scaleAnim}]}]}>
      {xeMay.hinh_anh_PH45671 ? (
        <Image source={{uri: xeMay.hinh_anh_PH45671}} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage} />
      )}
      <View style={{marginLeft: 30}}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Tên xe: {xeMay.ten_xe_PH45671}</Text>
          <Text style={styles.detail}>Màu sắc: {xeMay.mau_sac_PH45671}</Text>
          <Text style={styles.detail}>
            Giá bán: {xeMay.gia_ban_PH45671} VND
          </Text>
          <Text style={styles.description}>Mô tả: {xeMay.mo_ta_PH45671}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => onEdit(xeMay)}>
            <Text style={styles.buttonText}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleDelete}>
            <Text style={styles.buttonText}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeholderImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'green',
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#007BFF',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default XeMayItem;
