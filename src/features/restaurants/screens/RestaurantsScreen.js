import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfo } from "../components/RestaurantInfo";
import styled from "styled-components/native";

// const currentHeight = StatusBar.currentHeight;
const RestaurantScreenSafeArea = styled(SafeAreaView)`
  flex: 1;
  /* margin-top: ${StatusBar.currentHeight}px; */
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const RestaurantSearch = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.error};
`;
export const RestaurantsScreen = () => (
  <RestaurantScreenSafeArea>
    <RestaurantSearch>
      <Searchbar />
    </RestaurantSearch>
    <RestaurantList>
      <RestaurantInfo />
    </RestaurantList>
  </RestaurantScreenSafeArea>
);
