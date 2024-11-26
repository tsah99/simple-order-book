import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  supplier: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
    textDecorationLine: 'underline',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  discountedPrice: {
    fontSize: 12,
    color: '#2da32d',
    fontWeight: 'bold',
  },
  slashedPrice: {
    fontSize: 12,
    color: '#e53935',
    fontWeight: 'bold',
    marginLeft: 8,
    textDecorationLine: 'line-through',
  },
});
