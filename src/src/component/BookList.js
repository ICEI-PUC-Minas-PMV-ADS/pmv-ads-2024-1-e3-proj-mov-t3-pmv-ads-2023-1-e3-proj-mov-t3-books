import React from "react";
import { StyleSheet, FlatList, SectionList, Text, View, Image, ScrollView } from "react-native";
import BookDetail from "./BookDetail"
import HotBookDetail from "./HotBookDetail";
import sections from "../json/book_section.json";


const BookList = ({ navigation }) => {
    
    const renderSectionHeader = ({section}) => (
        <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            {section.horizontal ? (
                <FlatList 
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <HotBookDetail book={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => item.title }
            />
            ) : null}
            
        </>
    );

    const renderItem = ({ item, section }) => {
        if (section.horizontal) {
            return null;
        }
        return <BookDetail book={item} />
    };

    return (
        <SectionList 
            sections={sections}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            keyExtractor={ item => item.title }
        />
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
      fontSize: 24,
      color: '#131313',
      fontFamily: 'System',
      fontWeight: 'bold',
      paddingTop: 20,
      paddingBottom: 5,
      paddingLeft: 10,
    }
  })

export default BookList;