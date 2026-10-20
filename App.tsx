import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterScreen from './screen/CounterScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <View>
      <Provider store={store}>
      <CounterScreen />
    </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
