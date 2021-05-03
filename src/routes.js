import React from "react";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Pages/Home";
import About from "./Pages/About";

const Drawer = createDrawerNavigator();
export default function Routes() {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        edgeWidth={dimensions.width / 2}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sobre" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
