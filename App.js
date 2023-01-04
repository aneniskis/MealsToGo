import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const isAndroid = Platform.OS === "android";
console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? 50 : 0 }}>
        <View style={{ backgroundColor: "green", padding: 16 }}>
          <Text>Belekas cia zodziu bus</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "blue", padding: 16 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
