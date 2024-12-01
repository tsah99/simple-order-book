import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header, ItemGrid } from './components';
import Toolbar from './components/Toolbar';
import { useState } from 'react';
import { Cart } from './interfaces';

export default function App() {
  const [cart, setCart] = useState<Cart>({ items: {}, total: 0.0 });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <ItemGrid cart={cart} setCart={setCart} />
      <Toolbar cart={cart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fbcd8',
    width: '100%',
  },
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ddd',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
