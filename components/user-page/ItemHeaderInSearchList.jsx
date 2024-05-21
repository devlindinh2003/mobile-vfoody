import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../constant';

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 2, height: 4 },
    shadowColor: Colors.shadow[300],

    shadowOpacity: 0.3,
    elevation: 10,
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

const ItemHeaderInSearchList = ({ item }) => {
  console.log(item);
  return (
    <View className="flex-row pl-7 mb-7 gap-2">
      <View className="h-[100] w-[100] bg-white rounded-lg" style={styles.shadow}>
        <Image className="h-full w-full rounded-lg" source={{ uri: item.banner }} />
      </View>
      <View className="justify-between">
        <Text style={{ fontSize: 16 }} className=" font-hnow65medium">
          {item.shopName}
        </Text>
        <Text style={{ fontSize: 14 }} className=" font-hnow64regular text-gray-600">
          {item.title}
        </Text>
        <View className="flex-row items-center justify-between">
          <Text style={{ fontSize: 14 }} className=" font-hnow63book text-primary">
            {item.price}
          </Text>
          <Text style={{ fontSize: 12 }} className=" font-hnow64regular text-blue-600">
            {item.address}
          </Text>
        </View>
        <View>
          <Chip
            icon={() => <Icon name="ticket-percent-outline" color="white" size={14} />}
            title="Promotion"
            textStyle={{
              fontSize: 10,
              fontFamily: 'HeadingNow-63Book',
              color: Colors.commonBtnText,
              fontWeight: '600',
            }}
            style={{
              backgroundColor: Colors.primaryBackgroundColor,
            }}
            size={12}
          >
            Promotion Shop{' '}
          </Chip>
        </View>
      </View>
    </View>
  );
};

export default ItemHeaderInSearchList;
