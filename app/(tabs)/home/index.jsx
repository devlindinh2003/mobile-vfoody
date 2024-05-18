import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { Colors } from '../../../constant';
const Index = () => {
  const styles = StyleSheet.create({
    shadow: {
      shadowOffset: { width: 5, height: 8 },
      shadowColor: Colors.shadow[300],

      shadowOpacity: 0.1,
      elevation: 6,
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

  const [idCategorySelected, setCategorySelected] = useState(1);
  return (
    <>
      <View className="flex-1">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View className="flex-row  gap-5 p-5  pl-7">
            {DATA.map((item, index) => (
              <TouchableRipple
                onPress={() => {
                  setCategorySelected(item.id);
                }}
                rippleColor="rgba(252, 91, 91, 0.178)"
                key={item.id}
              >
                <View
                  style={idCategorySelected == item.id ? styles.shadowSelected : styles.shadow}
                  className={`flex justify-start items-center rounded-full
                   ${idCategorySelected == item.id ? 'bg-primary' : 'bg-white'} w-[60] h-full pt-1`}
                >
                  <Image
                    source={require('../../../assets/images/fastfood.png')}
                    className="rounded-full  border-solid border-primary"
                    resizeMode="cover"
                    style={{
                      borderColor: 'red',
                      borderWidth: 1,
                    }}
                  />
                  <View className="w-[40] pb-2 mt-2 justify-center items-center">
                    <Text
                      // className="font-hnow64regular flex flex-wrap over"
                      className={`${idCategorySelected == item.id ? 'text-white' : 'text-black'} font-hnow63book justify-center items-center text-center`}
                      style={{
                        fontSize: 11,
                        lineHeight: 15,
                        flexWrap: 'wrap',
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
            ))}
          </View>
        </ScrollView>
      </View>
      <View className="pl-7">
        <Text className="font-hnow65medium text-xl">Đặt hàng ngay!!!</Text>
      </View>
      <View className="flex-1 bg-black-100 ">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View className="flex-row  pl-7 mt-2  ">
            {Data2.map((item, index) => (
              <View key={item.id} className={`flex justify-start items-center bg-white w-60 rounded-2xl mr-5 `}>
                <Text>asdfasdfasdfasdf</Text>
                <Text> sadfasdfsadfasfasf</Text>
                <Image
                  source={require('../../../assets/images/tiny_logo.png')}
                  className="w-[100%] h-full"
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default Index;

const Data2 = [
  {
    id: 1,
    t: 'Quán ngon giá hời',
    Ad: 'Cheese Food House',
    image: 'https://th.bing.com/th/id/OIP.69qmBVlbeTJPmMdJlr2ixAAAAA?rs=1&pid=ImgDetMain',
  },
  {
    id: 21,
    t: 'Quán ngon giá hời',
    Ad: 'Cheese Food House',
    image: 'https://th.bing.com/th/id/OIP.69qmBVlbeTJPmMdJlr2ixAAAAA?rs=1&pid=ImgDetMain',
  },
];
const DATA = [
  {
    id: 1,
    title: 'Đồ ăn nhanh',
    image: '../../../assets/images/fastfood.png',
  },
  {
    id: 2,
    title: 'Đồ uống',
    image: '../../../assets/images/drink.png',
  },
  {
    id: 3,
    title: 'Mì phở',
    image: '../../../assets/images/noodle.png',
  },
  {
    id: 4,
    title: 'Bánh mì',
    image: '../../../assets/images/bread.png',
  },
  {
    id: 5,
    title: 'Chảo',
    image: '../../../assets/images/otherfood.png',
  },
];
