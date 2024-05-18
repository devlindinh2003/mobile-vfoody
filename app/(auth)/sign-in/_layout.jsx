import { Slot } from "expo-router";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import HeaderInAuth from "../../../components/common/HeaderInAuth";
import { Images } from "../../../constant";

const AuthenLayout = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="bg-bg-100 flex-1 h-full">
        <Image
          className=" h-full absolute top-0 left-0 right-0 bottom-0"
          resizeMode="stretch"
          source={Images.LogoCoverDark}
        />
        <HeaderInAuth activePage={"signIn"} />
        <Slot/>
      </View>
    </ScrollView>
  );
};

export default AuthenLayout;
