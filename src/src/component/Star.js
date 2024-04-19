import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const Star = ({ star }) => {
  const [rating, setRating] = useState(star);
const handleStarPress = (index) => {
    setRating(index + 1); 
  };

  let starnum = [];
  for (let i = 0; i < 5; i++) {
    starnum.push(
      <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
        <Image
          source={{
            uri: rating > i
              ? "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/icon_star_filled.png?raw=true"
              : "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/icon_star_empty.png?raw=true"
          }}
          style={styles.star}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <View style={styles.starnum}>{starnum}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    width: 14,
    height: 14,
    marginRight: 5 
  },
  starnum: {
    flexDirection: "row",
    marginTop: 20
  }
});

export default Star;
