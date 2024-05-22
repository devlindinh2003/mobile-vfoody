import { Link, router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Keyboard, View } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import * as yup from "yup";
import { Colors } from "../../../constant";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(8, "Phone number must be at least 8 characters")
    .max(11, "Phone number must be at most 11 characters")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must be at most 25 characters")
    .required("Password is required"),
});
const index = () => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '378831586584-r6qbnlk6sqad743mf5b68voupgi06uk0.apps.googleusercontent.com',
    webClientId: '378831586584-tr3bua7id30bgc7mgfgefea3o0d7jjfq.apps.googleusercontent.com',
    iosClientId: '378831586584-ocjo4ctv8je4q9d2ungkola7fi81pp1e.apps.googleusercontent.com'
  });

  async function handleSignInWithGoogle(){
    const user = await AsyncStorage.getItem('@user');
    console.log("--------");
    console.log('user',user);
    console.log('response, ', response);
    if(!user){
      if(response?.type === "success"){
        console.log('login thanh cong');
        await getUserInfo(response.authentication.accessToken);
      }
    }else{
      setUserInfo(Json.parse(user));
    }
  }

  const getUserInfo =async (token) =>{
    if(!token) return;
    try{
      const response = await fetch("https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${token}`},
      });

      const user = await response.json();
      console.log(user);
      await AsyncStorage.setItem('@user', JSON.stringify(user));
      setUserInfo(user);
    }catch(e){
      console.log(e);
    }
  };

  React.useEffect(() => {
    handleSignInWithGoogle();
  },[response]);

  const [isShowPassword, setIsShownPassword] = useState(false);
  return (
    <View className="bg-bg-100 flex-1 h-full">
      <Text>{JSON.stringify(userInfo)}</Text>
      <Button  mode="elevated"                 labelStyle={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 20,
                  lineHeight: 22,
                }} onPress={() =>  promptAsync()} >Login with google</Button>
      <Button onPress={() => AsyncStorage.removeItem('@user')}> Delete local store</Button>
    </View>
  );
};

export default index;
