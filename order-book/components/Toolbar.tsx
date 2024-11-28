import { StyleSheet, Text, View } from 'react-native';
import {
  HomeIcon,
  NotebookText,
  ShoppingCart,
  TextSearch,
} from 'lucide-react-native';

interface IIconWithName {
  icon: any;
  iconName: string;
}

function IconWithName({ icon, iconName }: IIconWithName) {
  return (
    <View style={styles.iconContainer}>
      {icon}
      <Text style={styles.text}>{iconName}</Text>
    </View>
  );
}

export default function Toolbar() {
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <IconWithName icon={<HomeIcon style={styles.icon} />} iconName="Home" />
        <IconWithName
          icon={<TextSearch style={styles.icon} />}
          iconName="Browse"
        />
        <IconWithName
          icon={<NotebookText style={styles.icon} />}
          iconName="Orders"
        />
        <IconWithName
          icon={<ShoppingCart style={styles.icon} />}
          iconName="Cart"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    paddingTop: 10,
    backgroundColor: 'white',
    borderTopColor: '#436175',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    color: '#436175',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    height: 16,
    width: 16,
    zIndex: 1,
    color: '#436175',
  },
});
