import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <FontAwesome name="search"/>
      <Text>Search bar </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  background:{
    backgroundColor:'#df1EeE',
    height:50,
    borderRadius:5,
    marginHorizontal:15

  }
});

export default SearchBar;
