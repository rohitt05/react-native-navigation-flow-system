import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function Payments() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Payments</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}