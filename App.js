import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";


/* Contants */
import FONTS from "./constants/fonts";

const App = () => {

  const [fontsLoading]=useFonts({
    'Inconsolata' :require("./assets/fonts/Inconsolata.ttf"),
    'SpaceMonoRegular':require("./assets/fonts/SpaceMono-Regular.ttf"),
    'SpaceMonoBold':require("./assets/fonts/SpaceMono-Bold.ttf")
  })

  if(!fontsLoading){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical:60,
    paddingHorizontal:0
  },
  text:{
    fontFamily:FONTS.SpaceMonoRegular
  }
});

export default App;
