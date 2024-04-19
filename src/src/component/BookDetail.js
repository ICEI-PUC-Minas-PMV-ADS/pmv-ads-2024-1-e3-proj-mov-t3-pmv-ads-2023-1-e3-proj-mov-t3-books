import React from "react";
import { StyleSheet, SectionList, Text, View, Image, ScrollView, Pressable, Linking } from "react-native";

const BookDetail = ({ book, navigation }) => {
    return (
        
        <View style={styles.cardContainerStyle}>
            <View style={styles.cardSectionStyle}>
              <Pressable
                onPress={() => navigation.navigate('Detail', book)}
              >         
                <Image
                  style={styles.imageStyle}
                  source={{uri: book.image}}
                />
              </Pressable>
            </View>
            <View style={[styles.thumbnailContainerStyle, 
                        styles.cardSectionStyle]}>
              <View style={styles.headerContentStyle}>
                <Text style={styles.name}>{book.book_name}</Text>
                <Text style={styles.author}>{book.author}</Text>
              </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
   
   name: {
        color: '#131313',
        fontSize: 14,
        fontFamily: 'System',
        fontWeight: 'bold'
   },
   author: {
        color: '#666666',
        fontSize: 12,
        fontFamily: 'System'
   },
   thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
    marginTop: 10
  },
  cardContainerStyle: {
    
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    
  },
  imageStyle: {
    height: 200,
    width: 140
  }
});

export default BookDetail;