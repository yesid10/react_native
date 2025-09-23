import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

interface FABProps {
  label: string;
  count: number;
  setCount: (newCount: number) => void;
}
export default function FAB({ label, count, setCount }: FABProps) {
  return (
    <Pressable
      style={(pressed) => [
        styles.btn,
        pressed ? { opacity: 0 } : { opacity: 0 },
      ]}
      onLongPress={() => setCount(0)}
      onPress={
        label === "+1" ? () => setCount(count + 1) : () => setCount(count - 1)
      }
    >
      <Text style={{ fontSize: 20, color: "#f2f0eb", fontWeight: "600" }}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#65558f",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },
});
