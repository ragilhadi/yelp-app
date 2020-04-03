import React, {useState} from "react";
import { Text, StyleSheet, View} from "react-native";
import SearchComponent from "../components/SearchComponent";
import yelp from "../../api/yelp";

const HomeScreen = ({navigation}) => {
  const [term, setTerm] = useState('')
  const [resault, setresault] = useState([])

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose'
      }
    })
    setresault(response.data.businesses)
  }

  return (
      <View>
            <SearchComponent 
              term={term}
              changeHandling={value => setTerm(value)}
              onSubmit = {searchApi}
            />
            <Text style={styles.text}>{term}</Text>
            <Text style={styles.text}>We Found {resault.length}</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;