import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header, ItemGrid } from './components';
import Toolbar from './components/Toolbar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <ItemGrid />
      <Toolbar />
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
