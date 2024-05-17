import { Tabs, router } from "expo-router";
import { Bell, Heart, ReceiptText, ShoppingCart, Store } from "lucide-react-native";
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
      {iconName}
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
            // paddingTop: 30,
            // paddingBottom: 30,
          },
        }}
      >
        <Tabs.Screen
          name="homes"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="homes"
                iconName={<Store size={24} color={focused ? Colors.activeTabColor : Colors.commonBtnText} strokeWidth={2} />}
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
                iconName={<ReceiptText size={24} color={focused ? Colors.activeTabColor : Colors.commonBtnText} strokeWidth={2} />}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="cart"
                iconName={<ShoppingCart size={24} color={focused ? Colors.activeTabColor : Colors.commonBtnText} strokeWidth={2} />}
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
                iconName={<Bell size={24} color={focused ? Colors.activeTabColor : Colors.commonBtnText} strokeWidth={2} />}
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
                iconName={<Heart size={24} color={focused ? Colors.activeTabColor : Colors.commonBtnText} strokeWidth={2.5} />}
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
