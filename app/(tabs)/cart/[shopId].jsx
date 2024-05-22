import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const CartItemInShop = () => {
  const param = useLocalSearchParams();
  console.log(param);
  return (
    <View>
      <Text>CartItemInShop</Text>
    </View>
  )
}

export default CartItemInShop