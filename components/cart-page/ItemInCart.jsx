import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Colors } from '../../constant';
const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 4, height: 4 },
    shadowColor: Colors.shadow[300],

    shadowOpacity: 0.3,
    elevation: 12,
    // background color must be set
  },
  shadowSelected: {
    shadowOffset: { width: 8, height: 8 },
    shadowColor: Colors.shadow.DEFAULT,

    shadowOpacity: 0.6,

    elevation: 20,
    // background color must be set
  },
});
const ItemInCart = ({ item }) => {
  const { width, height } = Dimensions.get('window');
  const heightItem = parseInt((width * 25) / 100);
  const widthItem = parseInt((width * 85) / 100);

  return (
    <View
      className="flex-row bg-white mb-4"
      style={{ height: heightItem, width: widthItem, zIndex: 1, overflow: 'visible' }}
    >
      <View className="bg-white rounded-2xl" style={styles.shadow}>
        <Image
          source={{
            uri: item.image,
          }}
          className="rounded-2xl bg-white"
          style={{
            height: heightItem,
            width: heightItem,
          }}
        />
      </View>
      <View className="ml-3 flex-1">
        <View className="flex-row justify-between items-center ">
          <Text className="p-0 m-0 font-hnow65medium text-lg">{item.name}</Text>
          <IconButton
            className="m-0"
            onPress={() => {}}
            icon="close"
            size={20}
            iconColor={Colors.primaryBackgroundColor}
          />
        </View>
        <View>
          <Text className="text-gray-600 font-hnow63book">Cay - Khong hanh</Text>
        </View>
        <View className="flex-1 justify-between items-end flex-row">
          <Text className="text-lg text-primary font-hnow63book">{item.price}</Text>
          <View className="flex-row justify-between items-center">
            <IconButton
              icon={'minus'}
              className="m-0 p-0 "
              mode="outlined"
              size={14}
              onPress={() => {}}
              style={{ borderColor: 'red' }}
              iconColor={Colors.primaryBackgroundColor}
            />
            <TextInput
              value={'1'}
              multiline={true}
              style={{ fontSize: 20, width: 40 }}
              textAlign="center"
              textAlignVertical="center"
            />
            <IconButton
              icon={'plus'}
              size={14}
              onPress={() => {}}
              style={{ borderColor: 'red' }}
              className="m-0 p-0 bg-primary"
              mode="outlined"
              iconColor={Colors.commonBtnText}
            />
          </View>
        </View>
      </View>
    
    </View>
  );
};

export default ItemInCart;
