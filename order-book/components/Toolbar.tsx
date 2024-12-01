import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  HomeIcon,
  NotebookText,
  ShoppingCart,
  TextSearch,
} from 'lucide-react-native';
import { CartObject } from '../interfaces';

interface IIconWithName {
  icon: any;
  iconName: string;
  onClick: () => void;
}

function IconWithName({ icon, iconName, onClick }: IIconWithName) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.iconContainer}>
        {icon}
        <Text style={styles.text}>{iconName}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Toolbar({ cart }: { cart: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <IconWithName
          icon={<HomeIcon style={styles.icon} />}
          iconName="Home"
          onClick={() => {}}
        />
        <IconWithName
          icon={<TextSearch style={styles.icon} />}
          iconName="Browse"
          onClick={() => {}}
        />
        <IconWithName
          icon={<NotebookText style={styles.icon} />}
          iconName="Orders"
          onClick={() => {}}
        />
        <IconWithName
          icon={<ShoppingCart style={styles.icon} />}
          iconName="Cart"
          onClick={() => {
            const { items, total } = cart;
            let alertString = 'Items\n';
            for (const itemKey in items) {
              const cartObject: CartObject = items[itemKey];
              const lineTotal: number = cartObject.quantity * cartObject.price;
              alertString += `${cartObject.name} (x${cartObject.quantity}): $${cartObject.price.toFixed(2)} each${
                cartObject.slashedPrice
                  ? ` (was $${cartObject.slashedPrice.toFixed(2)})`
                  : ''
              } - Line total: $${lineTotal.toFixed(2)}\n`;
            }
            alertString += `\n--\nTotal: $${total.toFixed(2)}`;
            Alert.alert('Current cart', alertString);
          }}
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
