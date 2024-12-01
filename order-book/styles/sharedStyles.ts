import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  itemName: {
    fontSize: 12,
    color: '#436175',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  modalTextItemName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#436175',
    flexWrap: 'wrap',
  },
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
  circleText: {
    width: 40,
    height: 40,
    backgroundColor: '#436175',
    color: 'white',
    textAlign: 'center',
    lineHeight: 33,
    borderRadius: 20,
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: 'white',
    borderWidth: 4,
    position: 'absolute',
    top: '50%',
    right: 0,
  },
});
