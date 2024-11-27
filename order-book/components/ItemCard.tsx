import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { PlusCircleIcon } from 'lucide-react-native';
import ItemModal from './ItemModal';
import { sharedStyles } from '../styles/sharedStyles';

export interface IItemCard {
  id: number;
  name: string;
  supplier: string;
  price: string;
  discounted_price: string;
  unit_size: string;
  image: string;
}

interface ItemCardProps {
  item: IItemCard;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 32 * 3) / 2; // Subtract total horizontal padding (32px * 3 for left, right, and between cards)
export default function ItemCard({ item }: ItemCardProps) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity: number) => {
    console.log(`New quantity: ${newQuantity}`);
    setQuantity(newQuantity);
  };

  // ensure a price is present
  if (!item.price && !item.discounted_price) {
    return null;
  }

  const hasSale: boolean = !!(
    item.discounted_price && item.discounted_price !== item.price
  );

  const [imageSource, setImageSource] = React.useState({ uri: item.image });

  const handleImageError = (e: any) => {
    console.log('Image error: ', e);
    setImageSource(require('../assets/no-image-icon.png'));
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.plusIcon}
        onPress={() => setModalVisible(true)}
      >
        {quantity ? (
          <Text style={sharedStyles.circleText}>{quantity}</Text>
        ) : (
          <PlusCircleIcon size={40} color="white" fill="#436175" />
        )}
      </TouchableOpacity>
      {hasSale && <Text style={styles.salePill}>Sale</Text>}
      <Image
        source={imageSource}
        style={styles.image}
        resizeMode="cover"
        onError={handleImageError}
      />
      <View style={styles.content}>
        <Text style={sharedStyles.supplier} numberOfLines={1}>
          {item.supplier || 'N/A'}
        </Text>
        <Text style={sharedStyles.itemName} numberOfLines={2}>
          {item.name || 'N/A'}
        </Text>
        <View style={sharedStyles.priceContainer}>
          {!item.discounted_price && item.price && (
            <Text style={sharedStyles.price}>
              ${parseFloat(item.price).toFixed(2)}
            </Text>
          )}
          {hasSale && (
            <Text style={sharedStyles.discountedPrice}>
              ${parseFloat(item.discounted_price).toFixed(2)}
            </Text>
          )}
          {hasSale && (
            <Text style={sharedStyles.slashedPrice}>
              ${parseFloat(item.price).toFixed(2)}
            </Text>
          )}
        </View>
      </View>
      <ItemModal
        item={item}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        imageSource={imageSource}
        cardWidth={cardWidth}
        hasSale={hasSale}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
      />
    </View>
  );
}

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
  plusIcon: {
    position: 'absolute',
    top: '50%',
    right: 10,
    zIndex: 2,
  },
  modalView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: '33%',
    height: cardWidth - 32,
    resizeMode: 'contain',
  },
  modalHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTextItemName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#436175',
    flexWrap: 'wrap',
  },
  modalTextDetail: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9fbcd8',
  },
  modalOuter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
