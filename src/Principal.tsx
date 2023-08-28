import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Principal() {
  return (
    <View style={styles.container}>
      <Text>Tela Principal </Text>
     
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc6c6",
    alignItems: "center",
    justifyContent: "center",
  },
});
