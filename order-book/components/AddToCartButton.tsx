import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { IItemCard } from './ItemCard';

const { width } = Dimensions.get('window');

export default function AddToCartButton({
  quantity,
  previousQuantity,
  item,
  onQuantitySubmit,
  closeModal,
}: {
  quantity: number;
  previousQuantity: number;
  item: IItemCard;
  onQuantitySubmit: (quantity: number) => void;
  closeModal: () => void;
}) {
  const handleSubmit = () => {
    onQuantitySubmit(quantity);
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

  console.log(
    `Previous quantity: ${previousQuantity}, Current quantity: ${quantity}`
  );

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
