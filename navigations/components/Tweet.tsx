import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TweetContent from "./TweetContent";

const Tweet = ({ tweet }) => {
  const navigation = useNavigation(); // Changed destructuring to direct assignment
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("TweetDetailsScreen", { tweet }); // Corrected navigation method
      }}
    >
      <TweetContent tweet={tweet} />
    </Pressable>
  );
};

export default Tweet;
