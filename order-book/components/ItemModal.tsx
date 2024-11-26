import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { XIcon } from 'lucide-react-native';
import { IItemCard } from './ItemCard';
import { sharedStyles } from '../styles/sharedStyles';
import QuantityPicker from './QuantityPicker';

interface ItemModalProps {
  item: IItemCard;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  imageSource: any;
  cardWidth: number;
  hasSale: boolean;
  quantity: number;
  handleQuantityChange: (newQuantity: number) => void;
}

export default function ItemModal({
  item,
  modalVisible,
  setModalVisible,
  imageSource,
  cardWidth,
  hasSale,
  quantity,
  handleQuantityChange,
}: ItemModalProps) {
  function handleModalClose() {
    setModalVisible(false);
    handleQuantityChange(0);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleModalClose}
    >
      <TouchableWithoutFeedback onPress={handleModalClose}>
        <View style={styles.modalOuter}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalView}>
              <View style={styles.modalHorizontal}>
                <Image
                  source={imageSource}
                  style={{ ...styles.modalImage, height: cardWidth - 32 }}
                />
                <View style={{ flex: 1, paddingLeft: 5 }}>
                  <View style={{ paddingBottom: 5 }}>
                    <Text style={styles.modalTextItemName}>{item.name}</Text>
                    <Text style={sharedStyles.supplier} numberOfLines={1}>
                      {item.supplier || 'N/A'}
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        ...styles.modalHorizontal,
                        flexDirection: 'row',
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      <Text
                        style={{
                          ...styles.modalTextDetail,
                          alignSelf: 'flex-start',
                        }}
                      >
                        Unit Size
                      </Text>
                      <Text
                        style={{
                          ...styles.modalTextDetail,
                          alignSelf: 'flex-end',
                        }}
                      >
                        {item.unit_size}ct
                      </Text>
                    </View>
                    <View
                      style={{
                        ...styles.modalHorizontal,
                        flexDirection: 'row',
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      <Text
                        style={{
                          ...styles.modalTextDetail,
                          alignSelf: 'flex-start',
                        }}
                      >
                        Price
                      </Text>
                      <View
                        style={
                          sharedStyles.priceContainer && {
                            alignSelf: 'flex-end',
                            flexDirection: 'row',
                          }
                        }
                      >
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
                  </View>
                </View>
              </View>
              <QuantityPicker
                label="Quantity"
                quantity={quantity}
                onQuantityChange={handleQuantityChange}
              />
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={handleModalClose}
              >
                <XIcon size={24} color="#436175" strokeWidth={3} />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
