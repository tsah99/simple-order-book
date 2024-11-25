import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

interface ItemCardProps {
  item: {
    id: number;
    name: string;
    supplier: string;
    price: string;
    discounted_price: string;
    image: string;
  };
}

const { width } = Dimensions.get('window');
const cardWidth = (width - (32 * 3)) / 2; // Subtract total horizontal padding (32px * 3 for left, right, and between cards)
export default function ItemCard({ item }: ItemCardProps) {
  // ensure a price is present
  if (!item.price && !item.discounted_price) {
    return null;
  }

  const hasSale = item.discounted_price && item.discounted_price !== item.price;

  const [imageSource, setImageSource] = React.useState({ uri: item.image });

  const handleImageError = (e: any) => {
    console.log('Image error: ', e);
    setImageSource(require('../assets/no-image-icon.png'));
  };

  return (
    <View style={styles.card}>
      {hasSale && (
        <Text style={styles.salePill}>Sale</Text>
      )}
      <Image 
        source={imageSource} 
        style={styles.image} 
        resizeMode="cover" 
        onError={handleImageError}
      />
      <View style={styles.content}>
        <Text style={styles.supplier} numberOfLines={1}>{item.supplier || 'N/A'}</Text>
        <Text style={styles.name} numberOfLines={2}>{item.name || 'N/A'}</Text>
        <View style={styles.priceContainer}>
          {!item.discounted_price && item.price && <Text style={styles.price}>${parseFloat(item.price).toFixed(2)}</Text>}
          {hasSale && (
              <Text style={styles.discountedPrice}>${parseFloat(item.discounted_price).toFixed(2)}</Text>
          )}
          {hasSale && (
            <Text style={styles.slashedPrice}>${parseFloat(item.price).toFixed(2)}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  salePill: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: '#2da32d',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    zIndex: 1,
  },
  card: {
    width: cardWidth,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  image: {
    paddingTop: 8,
    width: '80%',
    height: cardWidth - 16,
    marginLeft: '10%',
    marginRight: '10%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 8,
  },
  supplier: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
    textDecorationLine: 'underline',
  },
  name: {
    fontSize: 12,
    color: '#436175',
    fontWeight: 'bold',
    marginBottom: 4,
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

