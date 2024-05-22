import { Slot } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import HeaderInAuth from '../../../components/common/HeaderInAuth';
import { Colors, Images } from '../../../constant';

const AuthenLayout = () => {
  const { width, height } = Dimensions.get('window');
  const widthGoogleButton = parseInt((width * 80) / 100);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="bg-bg-100 flex-1 h-full">
        <Image
          className=" h-full absolute top-0 left-0 right-0 bottom-0"
          resizeMode="stretch"
          source={Images.LogoCoverDark}
        />
        <HeaderInAuth activePage={'signIn'} />
        <Slot screenOptions={{ Animation: 'flip' }} />
        <View className="flex-row justify-center  items-center my-8">
          <View className="h-[1] w-[100] bg-black-200"></View>
          <Text className="mx-4">Or</Text>
          <View className="h-[1] w-[100] bg-black-200"></View>
        </View>
        <View className="items-center">
          <TouchableRipple
            className="bg-white rounded-full"
            borderless
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <View
              className=" flex-row p-3   justify-between items-center rounded-full"
              style={{
                borderWidth: 1,
                borderColor: Colors.primaryBackgroundColor,
              }}
            >
              <Image className="h-[40] w-[40] mr-4" resizeMode="contain" source={Images.GoogleIcon} />
              <Text style={{ lineHeight: 24, fontSize: 20 }}>Sign in with google</Text>
            </View>
          </TouchableRipple>
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthenLayout;
