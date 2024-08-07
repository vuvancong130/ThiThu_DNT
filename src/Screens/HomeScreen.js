import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchXeMay} from '../Reducers/xeMayReducer';
import XeMayItem from '../Components/XeMayItem';
import Banner from '../Components/Banner';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {xeMayList, status, error} = useSelector(state => state.xeMay);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchXeMay());
    }
  }, [status, dispatch]);

  return (
    <View style={styles.container}>
      <Banner />
      <FlatList
        data={xeMayList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <XeMayItem
            xeMay={item}
            onEdit={xeMay => navigation.navigate('EditXeMay', {xeMay})}
          />
        )}
        ListEmptyComponent={<Text>No data available</Text>}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 60,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          position: 'absolute',
          right: 10,
          bottom: 10,
        }}
        onPress={() => navigation.navigate('AddXeMay')}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>Thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
