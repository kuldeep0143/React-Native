import { useState } from "react";
import { View, Button, StatusBar } from "react-native";

export default function App() {
  const [hideStatusBar, setHideStatusBar] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "lightpink", padding: 60 }}>
      <StatusBar
        backgroundColor="lightblue"
        barStyle="dark-content"
        hidden={hideStatusBar}
      />
      <Button
        title={hideStatusBar ? "Show Status Bar" : "Hide Status bar"}
        onPress={() => setHideStatusBar(!hideStatusBar)}
      />
    </View>
  );
}
