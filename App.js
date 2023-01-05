import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
export default function App() {
  return (
    <>
      {/* <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" elevation={3} />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView> */}
      <RestaurantsScreen />

      <ExpoStatusBar style="auto" />
    </>
  );
}
