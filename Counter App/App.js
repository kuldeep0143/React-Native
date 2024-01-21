import { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.outer}>Counter App</Text>
      <Text style={styles.inner}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 60,
    gap: 20,
    justifyContent: "center",
  },
  outer: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 100,
    paddingLeft: 55,
    textDecorationLine: "underline",
    color: "#808",
  },
  inner: { paddingLeft: 95, fontWeight: "bold", fontSize: 20 },
});
