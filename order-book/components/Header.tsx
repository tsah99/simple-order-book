import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Search, RefreshCw } from 'lucide-react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order Book</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Search style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#436175',
  },
  text: {
    textAlign: 'left',
    color: 'white',
    fontSize: 16,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    paddingLeft: 48,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    height: 16,
    width: 16,
    top: '50%',
    marginTop: -8,
    zIndex: 1,
    color: 'gray',
  },
});
