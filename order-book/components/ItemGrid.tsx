import React, { useState, useEffect, memo } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  RefreshControl,
} from 'react-native';
import ItemCard from './ItemCard';
import { IItemCard } from './ItemCard';

const MemoizedItemCard = memo(ItemCard);

export default function ItemGrid({
  cart,
  setCart,
}: {
  cart: any;
  setCart: (newCart: any) => void;
}) {
  const [items, setItems] = useState<IItemCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setRefreshing(true);
      const response = await fetch('https://retoolapi.dev/f0ee0v/items');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // TODO - dev/offline MODE (update to grab data from local source)
      // response = require('../data/orders.json');
      // const data = response;
      setItems(data);
    } catch (err) {
      setError('Failed to fetch items. Please try again later.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#436175" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <MemoizedItemCard item={item} cart={cart} setCart={setCart} />
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchItems} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9fbcd8',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
