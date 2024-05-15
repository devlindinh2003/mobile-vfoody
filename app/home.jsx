import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';

const Home = () => {
  const theme = useTheme();

  return (
    <View>
      {/* Test theme */}
      <Text style={{ backgroundColor: theme.colors.primary }}>Harry nè</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
