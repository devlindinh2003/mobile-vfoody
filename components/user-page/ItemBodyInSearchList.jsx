import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constant';
const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 2, height: 2 },
    shadowColor: Colors.shadow[300],

    shadowOpacity: 0.2,
    elevation: 5,
    // background color must be set
  },
});

const ItemBodyInSearchList = ({ item }) => {
  return (
    <View className="flex w-[90] flex-1 overflow-visible">
      <View className="w-[90] h-[90] rounded-lg " style={styles.shadow}>
        <Image source={{ uri: item.image }} className="w-full h-full rounded-lg" />
      </View>
      <View>
        <Text className="text-lg text-primary">{item.price}</Text>
        <Text className="text-black text-xs font-hnow63book">{item.name}</Text>
      </View>
    </View>
  );
};

export default ItemBodyInSearchList;
