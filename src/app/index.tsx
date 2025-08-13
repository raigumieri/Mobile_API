import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleSignIn() {}

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity
        style={[
          styles.button,
          !(email && password) && { opacity: 0.5 },
        ]}
        disabled={!(email && password)}
        onPress={handleSignIn}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    gap: 16,
  },
  input: {
    height: 54,
    width: "100%",
    backgroundColor: "#E3E3E3E3",
    borderRadius: 5,
    padding: 16,
  },
  button: {
    height: 54,
    width: "100%",
    backgroundColor: "#0a27e2ff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
})
