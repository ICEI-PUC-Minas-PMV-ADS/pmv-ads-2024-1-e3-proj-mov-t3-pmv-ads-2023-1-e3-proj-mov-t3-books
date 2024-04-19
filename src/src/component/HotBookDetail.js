import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";
import Star from "./Star";

const HotBookDetail = ({book, navigation}) => {
   return (
     <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Pressable
            onPress={() => navigation.navigate("Detail", book)}
          >  
            <Image
              style={styles.imageStyle}
              source={{uri: book.image}}
            />
            {book.starSection? <Star star={book.star} style={styles.star} />: null}
          </Pressable>
        </View>
      </View>  
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}>{book.book_name}</Text>
        <Text style={styles.headerContentStyle}>{book.author}</Text>
      </View>   
    </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 140,
    marginTop: 8,
    marginBottom: 20
  },
  headerTitleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#131313',
    fontFamily: 'System',
    fontWeight: 'bold'
  },
  headerContentStyle: {
    fontSize: 12,
    color: '#666666',
    fontFamily: 'System',
  },
  cardSectionStyle: {
    padding: 5,
  },
  imageStyle: {
    height: 200,
    width: 140,
  }
});

export default HotBookDetail;