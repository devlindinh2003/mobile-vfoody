import React from 'react';
import { Image, Text, View } from 'react-native';
import { Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../constant';
const ItemHeaderInSearchList = ({ item }) => {
  console.log(item);
  return (
    <View className="flex-row pl-7 mb-7 gap-2">
      <View className="h-[100] w-[100] rounded-lg overflow-hidden">
        <Image className="h-full w-full" source={{ uri: item.banner }} />
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
