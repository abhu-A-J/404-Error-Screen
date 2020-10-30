import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

/* Contants */
import FONTS from "./constants/fonts";
import COLORS from "./constants/colors";

/* Components */
import HeroBox from "./components/Herobox";

const App = () => {
  const [fontsLoading] = useFonts({
    Inconsolata: require("./assets/fonts/Inconsolata.ttf"),
    SpaceMonoRegular: require("./assets/fonts/SpaceMono-Regular.ttf"),
    SpaceMonoBold: require("./assets/fonts/SpaceMono-Bold.ttf"),
  });

  if (!fontsLoading) {
    return <AppLoading />;
  }

  return (
      <ScrollView  >
        <View style={styles.container}>
          <Text style={styles.title}>404 NOT FOUND</Text>
          <HeroBox />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:20,
    paddingBottom:20,
    backgroundColor:COLORS.background
  },
  title: {
    fontFamily: FONTS.Inconsolata,
    color: COLORS.black,
    fontSize: 24,
    letterSpacing: -2,
  },
});

export default App;
