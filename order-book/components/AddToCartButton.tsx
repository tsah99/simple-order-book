import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { IItemCard } from './ItemCard';

const { width } = Dimensions.get('window');

export default function AddToCart({
  quantity,
  item,
}: {
  quantity: number;
  item: IItemCard;
}) {
  const handleSubmit = () => {
    // Placeholder for actual submission logic
    // This could be an API call or local state update depending on your application architecture
    console.log(`Submitting ${quantity} of item ${item.id} to cart`);
    Alert.alert(
      'Added to Cart',
      `Added ${quantity} orders of ${item.name} to the cart.`
    );
  };

  return (
    <TouchableOpacity onPress={handleSubmit} style={styles.addToCartButton}>
      <Text style={styles.addToCartText}>Add to Cart</Text>
    </TouchableOpacity>
  );
}

// Add styles for the Add to Cart button
const styles = StyleSheet.create({
  addToCartButton: {
    width: width * 0.6,
    backgroundColor: '#9fbcd8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addToCartText: {
    color: '#436175',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
