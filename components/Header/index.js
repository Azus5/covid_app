import React from "react";

import { View, Text } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSkull, faBars } from "@fortawesome/free-solid-svg-icons";

const SkullSVG = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faSkull} size={30} />
    </View>
  );
};

export default function Header({ navigation }) {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40,
      }}
    >
      <FontAwesomeIcon
        icon={faBars}
        size={30}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={{ fontSize: 35 }}>
        C
        <SkullSVG />
        R
        <SkullSVG />
        NA
        <Text style={{ color: "green" }}>VIRUS</Text>
      </Text>
    </View>
  );
}
