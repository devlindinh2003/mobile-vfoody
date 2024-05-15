import React, { useRef, useEffect } from 'react';
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View, Animated } from 'react-native';
import { COLORS } from '../src/utils/color';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default function StartPage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        resizeMode="contain"
        source={require('../assets/cover.png')}
      />
      <FadeInView style={styles.animation}>
        <View style={styles.main}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../assets/logo.png')}
          />
          <Text style={styles.title}>VFoody</Text>
        </View>
        <Link href={'/home'} style={styles.button}>
          <Text style={styles.text}>Bắt đầu</Text>
        </Link>
      </FadeInView>
      {/* <TouchableOpacity
        onPress={() => {
          console.log('Navigating to Home');
          navigation.navigate('/home');
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Bắt đầu</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.primaryBackgroundColor,
    paddingHorizontal: 32,
    gap: 60,
  },
  main: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: COLORS.primaryTextColor,
  },
  button: {
    paddingVertical: 20,
    backgroundColor: COLORS.secondaryBackgroundColor,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.btnText,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 115,
  },
  logo: {
    width: 140,
    height: 180,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
  },
  animation: {
    width: '100%',
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 60,
  },
});
