import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookButton = () => {
  const [wishlist, setWishlist] = useState([]);
  const [bookCount, setBookCount] = useState(1);
  let navigation = useNavigation();

  const addBookToWishlist = () => {
    const newBook = { id: bookCount.toString(), title: `Livro ${bookCount}` };
    setWishlist([...wishlist, newBook]);
    setBookCount(bookCount + 1);
    navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Desejos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  bookItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default BookButton;