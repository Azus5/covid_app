import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>
        C
        <FontAwesomeIcon icon={faSkull} />
        R
        <FontAwesomeIcon icon={faSkull} />
        NA
        <Text style={{ color: "green" }}>VIRUS</Text>
      </Text>
    </View>
  );
}
