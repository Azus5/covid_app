import React, { useState, useEffect } from "react";

import Header from "../../../components/Header";
import styles from "./styles";

import { Text, View } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View
        style={{
          ...styles.container,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>
          Marcelo Campanelli - 211300{`\n`}
          Lucio Bergamasco - 211112{`\n`}
          Abner Ferrante - 211691
        </Text>
      </View>
    </View>
  );
}
