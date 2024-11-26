import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface QuantityPickerProps {
  label: string;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export default function QuantityPicker({
  label,
  quantity,
  onQuantityChange,
}: QuantityPickerProps) {
  const incrementQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.quantityText, flex: 1, alignSelf: 'center' }}>
        {label}
      </Text>
      <View style={styles.pillContainer}>
        <TouchableOpacity
          onPress={decrementQuantity}
          style={[styles.button, styles.leftButton]}
          accessibilityLabel="Decrease quantity"
          accessibilityHint="Decreases the quantity by 1"
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
        <TouchableOpacity
          onPress={incrementQuantity}
          style={[styles.button, styles.rightButton]}
          accessibilityLabel="Increase quantity"
          accessibilityHint="Increases the quantity by 1"
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  pillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  button: {
    backgroundColor: '#436175',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightButton: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  quantityContainer: {
    minWidth: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#436175',
    flexWrap: 'wrap',
  },
});
