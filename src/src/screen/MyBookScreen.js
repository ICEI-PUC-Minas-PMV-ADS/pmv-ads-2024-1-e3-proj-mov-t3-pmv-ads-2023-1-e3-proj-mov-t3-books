import React from 'react';
import { View } from 'react-native';
import { Text } from "@gluestack-ui/themed";

const MyBookScreen = () => {
    return (
    <View style={{flex: 1}}>
        <Text fontSize={30}>
            Página dos meus Livros
        </Text>              
    </View>
    );
}

export default MyBookScreen;