
import { StyleSheet, Text, View } from "react-native";

export default function Principal() {
  return (
    <View style={styles.container}>
      <Text>Tela Principal alice </Text>
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
