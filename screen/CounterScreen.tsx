import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { tang,giam } from '../redux/counterSlice';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';

function CounterScreen() {
  const so = useSelector((state) => state.counter.so);
  const dispatch = useDispatch();

  return (
        <View style={styles.container}>
      <Text style={styles.title}>Số đếm: {so}</Text>

      <Button
        title="Tăng"
        onPress={() => dispatch(tang())}
      />

      <View style={styles.space} />

      <Button
        title="Giảm"
        onPress={() => dispatch(giam())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  space: {
    height: 15,
  },
});

export default CounterScreen;