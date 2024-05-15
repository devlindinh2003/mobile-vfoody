import { createStackNavigator } from '@react-navigation/stack';
import { StartPage, Home } from './index';

const Stack = createStackNavigator();

const RootLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="start"
        component={StartPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: 'Welcome' }}
      />
    </Stack.Navigator>
  );
};

export default RootLayout;
