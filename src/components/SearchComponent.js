import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'

const SearchComponent = ({term,changeHandling,onSubmit}) => {
  return (
    <View style={styles.container}>
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
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 24,
        marginTop: 16
    },
    icon: {
        fontSize: 26,
        alignSelf: 'center',
        marginLeft: 16
    },
    input: {
      fontSize: 16,
      paddingHorizontal: 16,
      paddingVertical: 8,
      flex: 1
    }
  });
  

export default SearchComponent;