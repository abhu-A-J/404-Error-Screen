import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FONTS from "../../constants/fonts";

/* Components */
import Button from "../Button";

const HeroBox = () => {
  return (
    <View style={styles.heroboxContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/heroBoxImage.png")}
        />
      </View>
      <Text style={styles.title}>I have bad news for you.</Text>
      <Text style={styles.subTitle}>
        The page you are looking for might be removed or is temporarily
        unavailable.
      </Text>
			<Button>Back to homepage</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  heroboxContainer: {
		flex:1,
  },
  imageContainer: {
    width: "100%",
    height: 420,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: FONTS.SpaceMonoBold,
    fontSize: 35,
  },
  subTitle: {
    fontFamily: FONTS.SpaceMonoRegular,
    fontSize: 18,
    marginVertical: 20,
  },
});

export default HeroBox;
