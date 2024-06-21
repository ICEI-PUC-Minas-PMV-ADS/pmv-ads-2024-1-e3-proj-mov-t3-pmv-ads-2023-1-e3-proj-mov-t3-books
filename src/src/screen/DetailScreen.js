import React from 'react';
import { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking, Pressable } from 'react-native';
import Star from "../component/Star";
import BookButton from '../component/BookButton';

const DetailScreen = ({ route, navigation }) => {
    const { book_name,
            author,
            image,
            star,
            description
        } = route.params;
    let [state, setState] = useState(true);
    let changeImg = () => setState(previousState => !previousState);
    let imgSrc = state? "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/icon_bookmark.png?raw=true" : "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/icon_bookmark_actived.png?raw=true";

    return (
        <View>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image 
                        source={{uri: "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/icon_back.png?raw=true"}}
                        style={{width: 25, height: 25}}
                    />
                </Pressable>
                <Pressable onPress={() => changeImg()}>
                    <Image 
                        source={{uri: imgSrc}}
                        style={{width: 25, height: 25}}
                    />
                </Pressable>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Image 
                            style={styles.imageStyle}
                            source={{uri: image}}
                        />
                    </View>
                    <View style={styles.cardContainerStyle}>
                        <Text style={styles.name}>
                            {book_name}
                        </Text>
                        <Text style={styles.author}>
                            {author}
                        </Text>
                        <View style={styles.starContainer}>
                            <Star star={star} style={styles.star} />
                        </View>
                        <Text style={styles.description}>
                            {description}
                        </Text>
                    </View>
                 <BookButton  style={styles.button}  />   
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardContainerStyle: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: 300,
        width: 210,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        marginTop: 5,
        marginBottom: 6
    },
    button: {
        backgroundColor: "#6200EE",
        borderRadius: 6,
        padding: 20,
        marginTop: 20,
        marginBottom: 150,
        textAlign: 'center',
        fontFamily: "System",
    },
    name: {
        fontWeight:'bold',
        fontSize: 24,
        fontFamily: "System",
        lineHeight: 45,
        marginTop: 2,
        textAlign: 'center'
    },
    author: {
        fontSize: 16,
        color: "#666666",
        marginTop: 5,
        fontFamily: "System",
        textAlign: 'center'
    },
    starContainer: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "center",
        fontFamily: "System",
        textAlign: 'center',
        marginBottom: 8
    },
    starscore: {
        fontSize: 16,
        color: "black",
        marginTop: 5,
        fontFamily: "System",
        paddingLeft: 8
    },
    star: {
        width: 14,
        height: 14,
        paddingRight: 8,
        marginTop: 0
    },
    description: {
        fontSize: 16,
        color: "black",
        marginTop: 15,
        fontFamily: "System",
        textAlign: 'center',
        marginBottom: 8
    }
});

export default DetailScreen;