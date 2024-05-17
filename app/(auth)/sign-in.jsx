import { Formik } from 'formik';
import React, { useState } from 'react';
import { Image, Keyboard, ScrollView, StyleSheet, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import * as yup from 'yup';
import HeaderInAuth from '../../components/common/HeaderInAuth';
import { Colors, Images } from '../../constant';

const validationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(8, 'Phone number must be at least 8 characters')
    .max(11, 'Phone number must be at most 11 characters')
    .required('Phone number is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(25, 'Password must be at most 25 characters')
    .required('Password is required'),
});
const SignIn = () => {
  const [isShowPassword, setIsShownPassword] = useState(false);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="bg-bg-100 flex-1 h-full">
        <Image
          className=" h-full absolute top-0 left-0 right-0 bottom-0"
          resizeMode="stretch"
          source={Images.LogoCoverDark}
        />
        <HeaderInAuth activePage={'signIn'} />
        <Formik
          initialValues={{ phoneNumber: '', password: '' }}
          onSubmit={(values) => {
            // Handle login logic here
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View className="flex gap-10 mt-10 items-center">
              <View className="w-full flex-1 items-center">
                <TextInput
                  style={{ backgroundColor: 'transparent', width: '80%' }}
                  type="flat"
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                  keyboardType="phone-pad"
                  placeholder="Phone Number"
                  onSubmitEditing={Keyboard.dismiss}
                />
                <View className="w-[80%]">
                  <HelperText type="error" visible={touched.phoneNumber && errors.phoneNumber}>
                    {errors.phoneNumber}{' '}
                  </HelperText>
                </View>
              </View>
              <View className="w-full flex-1 items-center">
                <TextInput
                  style={{ backgroundColor: 'transparent', width: '80%' }}
                  type="flat"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={!isShowPassword}
                  right={
                    !isShowPassword ? (
                      <TextInput.Icon
                        icon="eye-off"
                        onPress={(state) => setIsShownPassword(true)}
                      />
                    ) : (
                      <TextInput.Icon icon="eye" onPress={(state) => setIsShownPassword(false)} />
                    )
                  }
                  placeholder="Password"
                />
                <View className="w-[80%]">
                  <HelperText type="error" visible={touched.password && errors.password}>
                    {errors.password}
                  </HelperText>
                </View>
              </View>
              <Button
                textColor={Colors.primaryBackgroundColor}
                mode="text"
                theme={{ roundness: 4 }}
                contentStyle={{
                  paddingVertical: 8,
                }}
                labelStyle={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 16,
                  lineHeight: 19,
                }}
                onPress={handleSubmit}
              >
                Quên Mật Khẩu?
              </Button>

              <Button
                buttonColor={Colors.primaryBackgroundColor}
                textColor={Colors.commonBtnText}
                mode="elevated"
                style={{ width: '80%' }}
                theme={{ roundness: 4 }}
                contentStyle={{
                  paddingVertical: 8,
                }}
                labelStyle={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 20,
                  lineHeight: 22,
                }}
                onPress={handleSubmit}
              >
                Đăng nhập
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
