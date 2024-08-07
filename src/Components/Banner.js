import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  TouchableOpacity,
} from 'react-native';

const imageUrl =
  'https://dat.bike/cdn/shop/files/DATBIKE_635.png?v=1697528288&width=5760';

const Banner = () => {
  const [pressed, setPressed] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    setPressed(true);
    Animated.timing(scaleAnim, {
      toValue: 1.2,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setPressed(false));
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View
        style={[styles.container, {transform: [{scale: scaleAnim}]}]}>
        <ImageBackground
          source={{uri: imageUrl}}
          style={styles.image}></ImageBackground>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default Banner;
