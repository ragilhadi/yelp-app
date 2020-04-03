import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'

const SearchComponent = ({term,changeHandling,onSubmit}) => {
  return (
    <View styles={styles.container}>
        <Feather name="search" style={styles.icon}/>
        <TextInput 
            value={term}
            onChangeText={value => changeHandling(value)}
            placeholder='Search'
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={onSubmit}
        />
      </View>
  )
};

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
    },
    icon: {
        fontSize: 26
    },
    input: {
      borderWidth: 2,
      borderColor: 'black',
      fontSize: 16,
      paddingHorizontal: 16,
      paddingVertical: 8
    }
  });
  

export default SearchComponent;