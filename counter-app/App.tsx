import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FAB from "./components/FAB";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>

      <View style={{ flexDirection: "row", gap: "50%" }}>
        {/* <Pressable style={styles.btn} onPress={() => setCount(count - 1)}>
          <Text style={{ fontSize: 20 }}>-1</Text>
        </Pressable>
        <Pressable style={styles.btn} onLongPress={() => setCount(0)} onPress={() => setCount(count + 1)}>
          <Text style={{ fontSize: 20 }}>+1</Text>
        </Pressable> */}

        <FAB label="+1" count={count} setCount={setCount} />
        <FAB label="-1" count={count} setCount={setCount} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },

  count: {
    fontSize: 120,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
});
