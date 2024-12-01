import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { IItemCard } from './ItemCard';
import { CartObject } from '../interfaces';

const { width } = Dimensions.get('window');

export default function AddToCartButton({
  quantity,
  previousQuantity,
  item,
  onQuantitySubmit,
  closeModal,
  cart,
  setCart,
}: {
  quantity: number;
  previousQuantity: number;
  item: IItemCard;
  onQuantitySubmit: (quantity: number) => void;
  closeModal: () => void;
  cart: any;
  setCart: (newCart: any) => void;
}) {
  const handleSubmit = () => {
    onQuantitySubmit(quantity);
    let cartObject: CartObject;
    let newTotal = cart.total;
    if (item.id in cart.items) {
      console.log('was in cart');
      cartObject = cart.items[item.id];
      newTotal -= cartObject.quantity * cartObject.price;
    }
    cartObject = {
      id: item.id,
      name: item.name,
      price: item.discounted_price
        ? parseFloat(item.discounted_price)
        : parseFloat(item.price),
      slashedPrice: item.discounted_price ? parseFloat(item.price) : undefined,
      quantity: quantity,
    };
    if (quantity === 0) {
      delete cart.items[item.id];
      setCart({ items: cart.items, total: newTotal });
    } else {
      newTotal += cartObject.quantity * cartObject.price;
      setCart({
        items: { ...cart.items, [item.id]: cartObject },
        total: newTotal,
      });
    }

    console.log(`Submitting ${quantity} of item ${item.id} to cart`);
    if (previousQuantity === 0) {
      Alert.alert(
        'Added to Cart',
        `Added ${quantity} orders of ${item.name} to the cart.`
      );
    } else {
      Alert.alert(
        'Updated Cart',
        `You have ${quantity} orders of ${item.name} in the cart.`
      );
    }
    closeModal();
  };

  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={[
        styles.button,
        previousQuantity === 0 && quantity === 0 && styles.disabledButton,
      ]}
      disabled={previousQuantity === 0 && quantity === 0}
    >
      <Text style={styles.buttonText}>
        {previousQuantity === 0 ? 'Add to Cart' : 'Update Cart'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.6,
    backgroundColor: '#9fbcd8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#436175',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});
