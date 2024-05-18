import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import { View } from 'react-native';
import { TouchableRipple } from "react-native-paper";
import { Colors } from "../../constant";
// const TabIcon = ({ icon, color, name, focused, iconName }) => {
//   return (
//     <View className="items-center justify-center ">
//       <IconButton
//         icon={iconName}
//         theme={{ colors: { secondary: "white" } }}
//         iconColor={focused ? "#e5ff00" : Colors.commonBtnText}
//         size={28}
//         onPress={(e) => {
//           router.push("/" + name);
//         }}
//       />
//     </View>
//   );
// };
const TabIcon = ({ icon, color, name, focused, iconName }) => {
  return (
    <TouchableRipple
      className="items-center justify-center h-full w-full  rounded-full"
      onPress={() => router.push("/" + name)}
      rippleColor="rgba(80, 80, 80, 0.075)"
      borderless={true}
    >
    <View className="">
    
      {iconName}
    </View>
    </TouchableRipple>
  );
};
const TabLayout = () => {
  return (
    <>
      <Tabs
        initialRouteName="homes"
        screenOptions={{
          tabBarActiveTintColor: Colors.commonBtnText,
          tabBarInactiveTintColor: Colors.tertiaryTextColor,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Colors.primaryBackgroundColor,
            borderTopWidth: 1,
            // height: 100,
            // paddingTop: 10,
            // paddingBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="home"
                iconName={<Ionicons name="storefront" size={20} color={focused ? Colors.activeTabColor : Colors.commonBtnText} />}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="order"
                iconName={<Ionicons name="newspaper" size={20} color={focused ? Colors.activeTabColor : Colors.commonBtnText} />}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="cart"
                iconName={<MaterialCommunityIcons name="shopping" size={20} color={focused ? Colors.activeTabColor : Colors.commonBtnText} />}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="notify"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="notify"
                iconName={<Ionicons name="heart" size={20} color={focused ? Colors.activeTabColor : Colors.commonBtnText}/>}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="like"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="like"
                iconName={<Octicons name="bell-fill" size={20} color={focused ? Colors.activeTabColor : Colors.commonBtnText} />}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
