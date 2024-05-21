import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCount } from './counterSlice';

const Counter = () => {
const count = useSelector(selectCount);
const dispatch = useDispatch();

const handleAdd = () => {
  dispatch(increment());
};

const handleSubtract = () => {
  dispatch(decrement());
};

return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{count}</Text>
    <Button title="Add" onPress={handleAdd} />
    <Button title="Subtract" onPress={handleSubtract} />
  </View>
);
};

export default Counter;