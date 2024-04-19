import React from "react";
import { View, FlatList } from "react-native";
import BookList from "../component/BookList";
import booklist from "../json/book_section.json";

const BookScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <BookList
                list={booklist.BookList}
                navigation={navigation}
            />
        </View>
    );
};

export default BookScreen;