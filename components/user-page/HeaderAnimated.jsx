import * as React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

const Header_Max_Height = 200;
const Header_Min_Height = 0;

export default function DynamicHeader({animHeaderValue}) {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['blue', 'red'],
    extrapolate: 'clamp'
  })

  const animateHeaderHeight =  animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height , Header_Min_Height],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View 
        style={[
          styles.header,
          {
            height: animateHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor,
            overflow: 'hidden'
          }
        
        ]}
      >
        <Text style={styles.headerText}>
          A List of Books
        </Text>         
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',      
    left: 0,
    right: 0,
    paddingTop: 10         
  },
  headerText: {
    overflow: "hidden",
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});