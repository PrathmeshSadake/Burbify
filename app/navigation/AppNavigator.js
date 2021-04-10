import React from "react";
import { createTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createTabNavigator();

const AppNavigator = () => {
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={ListingsScreen} />
    <Tab.Screen name="ListingEdit" component={ListingsScreen} />
    <Tab.Screen name="Account" component={ListingsScreen} />
  </Tab.Navigator>;
};

export default AppNavigator;