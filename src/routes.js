import React from "react";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { enableScreens } from "react-native-screens";
enableScreens();

const Drawer = createDrawerNavigator();

import Home from "./Pages/Home";

export default function Routes() {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        edgeWidth={dimensions.width / 2}
      >
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
