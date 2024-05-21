import React from 'react';
import { Image, Text, View } from 'react-native';

const ItemBodyInSearchList = ({ item }) => {
  return (
    <View className="flex w-[90] flex-1">
      <View className="w-[90] h-[90] rounded-lg overflow-hidden">
        <Image source={{ uri: item.image }} className="w-full h-full" />
      </View>
      <View>
        <Text className="text-lg text-primary">{item.price}</Text>
        <Text className="text-black text-xs font-hnow63book">{item.name}</Text>
      </View>
    </View>
  );
};

export default ItemBodyInSearchList;
